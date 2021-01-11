import isEmpty from 'lodash.isempty';

/**
 * Return output if condition is met.
 * Empty string otherwise.
 */
function squash(condition, output) {
  return isEmpty(condition) ? '' : output;
}

export default {
  flex: ({ direction = 'column', justify, align, wrap, gap }) => `
    display: flex;
    flex-direction: ${direction};

    ${squash(justify, `justify-content: ${justify};`)}
    ${squash(align, `align-items: ${align};`)}
    ${squash(wrap, `flex-wrap: ${wrap};`)}
    ${squash(gap, `gap: ${gap};`)}
  `,

  grid: ({ columns, rows, gap }) => `
    display: grid;
    ${squash(columns, `grid-template-columns: ${columns};`)}
    ${squash(rows, `grid-template-rows: ${rows};`)}
    ${squash(gap, `grid-gap: ${gap};`)}
  `,

  absolute: ({ top, bottom, left, right }) => `
    position: absolute;
    ${squash(top, `top: ${top};`)}
    ${squash(bottom, `bottom: ${bottom};`)}
    ${squash(left, `left: ${left};`)}
    ${squash(right, `right: ${right};`)}
  `,
};
