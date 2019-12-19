import React from 'react';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { UPDATES_QUERY } from '../../queries';
import Updates from './';

describe('Updates', () => {
  const updates = [
    {
      story:
        'Currently working on a Spotify widget for peer-to-peer song recommendations',
      date: null,
    },
    {
      story: 'Started @ Upstatement',
      date: '2020-01-09T13:57:00.000Z',
    },
    {
      story: 'Senior Year @ Northeastern University',
      date: '2019-12-14T13:57:00.000Z',
    },
  ];

  const mocks = [
    {
      request: {
        query: UPDATES_QUERY,
      },
      result: {
        data: {
          getUpdateList: {
            items: updates,
          },
        },
      },
    },
  ];

  it('renders', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Updates />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('Updates')).toBeInTheDocument();
    });
  });

  it('renders all stories and dates', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Updates />
      </MockedProvider>,
    );

    await wait(() => {
      updates.forEach(({ story, date }) => {
        expect(getByText(story)).toBeInTheDocument();
      });
    });
  });
});
