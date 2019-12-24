import React from 'react';
import { render } from '@testing-library/react';

import GetInTouch from './';

describe('GetInTouch', () => {
  it('renders', () => {
    const { getByTestId } = render(<GetInTouch />);
    expect(getByTestId('GetInTouch')).toBeInTheDocument();
  });
});
