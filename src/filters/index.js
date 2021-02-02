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
    return featured.map((slug) =>
      projects.find(({ fileSlug }) => fileSlug === slug),
    );
  });

  /**
   * Exclude projects.
   */
  eleventyConfig.addFilter('exclude', (projects, exclude) => {
    return projects.filter(({ fileSlug }) => !exclude.includes(fileSlug));
  });

  /**
   * Inject years into projects list.
   */
  eleventyConfig.addFilter('injectYears', (projects) => {
    const [results, _] = projects.reduce(
      ([acc, years], project) => {
        const { year } = project.data;

        if (years.has(year)) {
          return [[...acc, project], years];
        } else {
          const yearPayload = {
            data: {
              title: year,
              isYear: true,
            },
          };

          years.add(year);

          return [[...acc, yearPayload, project], years];
        }
      },
      [[], new Set()],
    );

    return results;
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
