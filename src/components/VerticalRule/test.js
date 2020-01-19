import React from 'react';
import { render } from '@testing-library/react';

import VerticalRule from '.';

describe('VerticalRule', () => {
  it('renders given children', () => {
    const children = 'This is a vertical rule';

    const { getByText } = render(<VerticalRule>{children}</VerticalRule>);
    expect(getByText(children)).toBeInTheDocument();
  });
});
