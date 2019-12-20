import React from 'react';
import { render, wait } from '@testing-library/react';

import JumpTo from './';

describe('JumpTo', () => {
  const elements = [{ id: '1' }, { id: '2' }];
  document.getElementsByClassName = () => elements;

  it('renders', async () => {
    const { getByTestId } = render(<JumpTo />);

    await wait(() => {
      expect(getByTestId('JumpTo')).toBeInTheDocument();
    });
  });

  it('renders Back to Top', async () => {
    const { getByText } = render(<JumpTo />);

    await wait(() => {
      expect(getByText('Back to Top')).toBeInTheDocument();
    });
  });

  it('renders all ids', async () => {
    const { getByText } = render(<JumpTo />);

    await wait(() => {
      elements.forEach(({ id }) => {
        expect(getByText(id)).toBeInTheDocument();
      });
    });
  });

  it('renders null if elements not found', async () => {
    const { queryByTestId } = render(<JumpTo />);

    await wait(() => {
      expect(queryByTestId('JumpTo')).toBeNull();
    });
  });
});
