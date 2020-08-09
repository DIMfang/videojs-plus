const ghpages = require('gh-pages');

ghpages.publish(
  './',
  {
    src: ['examples/**/*', 'dist/**/*']
  },
  function (err) {
    // eslint-disable-next-line
    console.log(err);
  }
);
