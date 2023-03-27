const { User } = require('../../models/User');
const createError = require('http-errors');

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw createError(401, 'Email or password is incorrect');
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw createError(401, 'Email or password is incorrect');
  }

  return user;
};

module.exports = loginService;
