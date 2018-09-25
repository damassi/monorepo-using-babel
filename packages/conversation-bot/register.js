require('@babel/register')({
  root: require('path').join(__dirname, '..', '..'),
  include: ['**/*.js'],
});
