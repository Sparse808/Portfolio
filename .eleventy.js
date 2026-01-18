const {DateTime} = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy static assets straight through to _site
  eleventyConfig.addPassthroughCopy("src/res");
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("projectDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
