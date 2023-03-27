const notFound = (_, res, __) => {
  res.status(404).json({
    message: 'This route does not exist. Please check the documentation.',
  });
};

module.exports = notFound;
