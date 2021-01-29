module.exports = function (eleventyConfig) {
  /**
   * Shorten a year into its last two digits.
   */
  eleventyConfig.addFilter('shortYear', (year) => {
    const shortYear = year.toString().slice(2);
    return `'${shortYear}`;
  });

  /**
   * Join given list of strings with separator
   */
  eleventyConfig.addFilter('join', (arr, separator) => {
    return arr.join(separator);
  });
};
