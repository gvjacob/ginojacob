import React from 'react';
import { gql } from 'apollo-boost';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import withQuery from './';

describe('withQuery', () => {
  const query = gql`
    {
      text
    }
  `;

  const queryData = { text: 'Hello Apollo' };
  const queryDataString = JSON.stringify(queryData);

  const TestComponent = withQuery(({ data }) => {
    return <div>{JSON.stringify(data)}</div>;
  }, query);

  const mocks = [
    {
      request: {
        query,
      },
      result: {
        data: queryData,
      },
    },
  ];

  it('renders null if loading', async () => {
    const { queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestComponent />
      </MockedProvider>,
    );

    expect(queryByText(queryDataString)).toBeNull();
  });

  it('renders and passes data to component when data is loaded', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestComponent />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByText(queryDataString)).toBeInTheDocument();
    });
  });
});
