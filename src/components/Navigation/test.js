import React from 'react';
import { render } from '@testing-library/react';

import Navigation from './';

describe('Navigation', () => {
  let props;
  let tabs;

  beforeEach(() => {
    tabs = [
      { text: 'Gino', href: '/' },
      { text: 'Developer', href: '/developer' },
      { text: 'Designer', href: '/designer' },
      { text: 'Ballroom Dancer', href: '/ballroomdancer' },
    ];

    props = {
      tabs,
    };
  });

  it('renders', () => {
    const { getByTestId } = render(<Navigation {...props} />);
    expect(getByTestId('Navigation')).toBeInTheDocument();
  });

  it('renders none when tabs are not given', () => {
    const { queryByTestId } = render(<Navigation />);
    expect(queryByTestId('Navigation')).toBeNull();
  });

  it('renders all tabs and urls', () => {
    const { getByText, container } = render(<Navigation {...props} />);

    tabs.forEach(({ text, href }) => {
      expect(getByText(text)).toBeInTheDocument();
      expect(container.querySelector(`a[href='${href}']`)).toBeInTheDocument();
    });
  });
});
