import React from 'react';
import { Grid as CSSGrid, Cell } from 'styled-css-grid';

const Grid = props => <CSSGrid flow="column dense" {...props} />;

const Block = (width, height) => props => <Cell width={width} height={height} {...props} />;

export const TwoByTwo = Block(2, 2);
export const OneByOne = Block(1, 1);

export default Grid;
