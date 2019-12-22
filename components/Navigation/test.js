import React from 'react';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

import Navigation from './';

describe('Navigation', () => {
  const tabs = [
    { text: 'Gino', href: '/' },
    { text: 'Developer', href: '/developer' },
    { text: 'Designer', href: '/designer' },
    { text: 'Ballroom Dancer', href: '/ballroomdancer' },
  ];

  const router = {
    asPath: '/',
  };

  it('renders', () => {
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <Navigation />
      </RouterContext.Provider>,
    );
    expect(getByTestId('Navigation')).toBeInTheDocument();
  });

  it('renders all tabs and urls', () => {
    const { getByText, container } = render(
      <RouterContext.Provider value={router}>
        <Navigation />
      </RouterContext.Provider>,
    );

    tabs.forEach(({ text, href }) => {
      expect(getByText(text)).toBeInTheDocument();
      expect(container.querySelector(`a[href='${href}']`)).toBeInTheDocument();
    });
  });
});
