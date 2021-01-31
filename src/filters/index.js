const chunk = require('lodash.chunk');

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

  /**
   * Filter for projects that are published.
   */
  eleventyConfig.addFilter('published', (projects) => {
    return projects.filter(({ data }) => data.published);
  });

  /**
   * Filter for projects that are featured.
   */
  eleventyConfig.addFilter('featured', (projects, featured) => {
    return projects.filter(({ fileSlug }) => featured.includes(fileSlug));
  });

  /**
   * Exclude projects.
   */
  eleventyConfig.addFilter('exclude', (projects, exclude) => {
    return projects.filter(({ fileSlug }) => !exclude.includes(fileSlug));
  });

  /**
   * Sort projects by year, alphanumeric
   */
  eleventyConfig.addFilter('sort', (projects) => {
    return projects.sort((first, second) => {
      if (first.data.year > second.data.year) {
        return -1;
      } else if (first.data.year < second.data.year) {
        return 1;
      } else if (
        first.data.title.toLowerCase() > second.data.title.toLowerCase()
      ) {
        return 1;
      } else if (
        first.data.title.toLowerCase() < second.data.title.toLowerCase()
      ) {
        return -1;
      } else {
        return 0;
      }
    });
  });

  /**
   * Break array into chunks of given size
   */
  eleventyConfig.addFilter('chunks', (arr, size) => {
    return chunk(arr, size);
  });
};
