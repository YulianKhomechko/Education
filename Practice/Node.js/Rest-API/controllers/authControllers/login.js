const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { loginService, assignTokens } = require('../../services');
const { User } = require('../../models/User');

const login = middlewareWrapper(async (req, res) => {
  const user = await loginService(req.body);
  const { accessToken, refreshToken } = assignTokens(user);

  await User.findByIdAndUpdate(user._id, { refresh_token: refreshToken });

  res.status(200).json({ user, token: accessToken });
});

module.exports = login;
