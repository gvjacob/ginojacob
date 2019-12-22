import React from 'react';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

import { GINO_PNG_QUERY } from '../../queries';
import Headline from './';

describe('Headline', () => {
  const sourceUrl = 'www.ginojacob.com';

  const router = {
    asPath: '/',
  };

  const titles = ['Gino Jacob', 'Developer', 'Designer', 'Ballroom Dancer'];

  const mocks = [
    {
      request: {
        query: GINO_PNG_QUERY,
      },
      result: {
        data: {
          getAsset: {
            sourceUrl,
          },
        },
      },
    },
  ];

  it('renders', async () => {
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Headline />
        </MockedProvider>
      </RouterContext.Provider>,
    );

    await wait(() => {
      expect(getByTestId('Headline')).toBeInTheDocument();
    });
  });

  it('renders all tabs', async () => {
    const { getByText } = render(
      <RouterContext.Provider value={router}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Headline />
        </MockedProvider>
      </RouterContext.Provider>,
    );

    await wait(() => {
      titles.forEach((title) => {
        expect(getByText(title)).toBeInTheDocument();
      });
    });
  });

  it('renders image', async () => {
    const { container } = render(
      <RouterContext.Provider value={router}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Headline />
        </MockedProvider>
      </RouterContext.Provider>,
    );

    await wait(() => {
      expect(
        container.querySelector(`img[src="${sourceUrl}"]`),
      ).toBeInTheDocument();
    });
  });
});
