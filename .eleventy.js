module.exports = function (eleventyConfig) {
  // Copy static assets straight through to _site
  eleventyConfig.addPassthroughCopy("src/res");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
