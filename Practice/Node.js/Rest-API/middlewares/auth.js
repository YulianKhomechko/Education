const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const createError = require('http-errors');
const { assignTokens } = require('../services');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const auth = async (req, res, next) => {
  let token;
  try {
    const [, headerToken] = req.headers['authorization'].split(' ');
    token = headerToken;
  } catch (err) {
    next(createError(401));
    return;
  }

  let user;
  try {
    const decoded = jwt.decode(token);

    user = await User.findById(decoded.id);

    if (!user.refresh_token) {
      next(createError(401));
      return;
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET);

    req.user = user;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      try {
        jwt.verify(user.refresh_token, REFRESH_TOKEN_SECRET);

        const { accessToken } = assignTokens(user);

        res.json({ token: accessToken });
      } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
          next(
            createError(
              401,
              'Your authentication token has expired. Please log in again to continue.'
            )
          );
          return;
        }

        next(createError(401, 'Invalid refresh token'));
      }
    }
    next(err);
  }
};

module.exports = auth;
