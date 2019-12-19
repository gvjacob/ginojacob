import React from 'react';
import { gql } from 'apollo-boost';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { RESOURCES_QUERY } from '../../queries';
import Social from './';

describe('Social', () => {
  const links = [
    { fontAwesomeClass: 'fa-github', url: 'https://github.com/gvjacob' },
    {
      fontAwesomeClass: 'fa-linkedin-in',
      url: 'https://www.linkedin.com/in/gvjacob',
    },
  ];

  const mocks = [
    {
      request: { query: RESOURCES_QUERY },
      result: { data: { getResourceList: { items: links } } },
    },
  ];

  it('renders', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Social />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('Social')).toBeInTheDocument();
    });
  });

  it('renders links', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Social />
      </MockedProvider>,
    );

    await wait(() => {
      links.forEach(({ url }) => {
        expect(container.querySelector(`a[href="${url}"]`)).toBeInTheDocument();
      });
    });
  });
});
