import isEmpty from "lodash.isempty";

/**
 * Return output if condition is met.
 * Empty string otherwise.
 */
function squash(condition, output) {
  return isEmpty(condition) ? "" : output;
}

export default {
  flex: (direction = "column") => `
    display: flex;
    flex-direction: ${direction};
  `,

  grid: ({ columns, rows, gap }) => `
    display: grid;
    ${squash(columns, `grid-template-columns: ${columns};`)}
    ${squash(rows, `grid-template-rows: ${rows};`)}
    ${squash(gap, `grid-gap: ${gap};`)}
  `,
};
