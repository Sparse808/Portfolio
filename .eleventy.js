module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("res");
  eleventyConfig.addPassthroughCopy("css");  // <-- copy your CSS
};
