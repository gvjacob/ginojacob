import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { UPDATES_QUERY } from '../../queries';
import Updates from './';

describe('Updates', () => {
  const bookmarked = [
    {
      story:
        'Currently working on a Spotify widget for peer-to-peer song recommendations',
      date: null,
      bookmark: true,
    },
  ];

  const updates = [
    {
      story: 'Started @ Upstatement',
      date: '2020-01-09T13:57:00.000Z',
      bookmark: false,
    },
    {
      story: 'Senior Year @ Northeastern University',
      date: '2019-12-14T13:57:00.000Z',
      bookmark: false,
    },
    {
      story: 'Left Pluralsight',
      date: '2019-10-14T13:57:00.000Z',
      bookmark: false,
    },
    {
      story: 'Finished Chef designs',
      date: '2019-11-14T13:57:00.000Z',
      bookmark: false,
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
            items: bookmarked.concat(updates),
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

  it('renders all bookmarked updates', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Updates />
      </MockedProvider>,
    );

    await wait(() => {
      bookmarked.forEach(({ story, date }, index) => {
        expect(getByText(story)).toBeInTheDocument();
      });
    });
  });

  it('renders three updates', async () => {
    const { getByText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Updates />
      </MockedProvider>,
    );

    await wait(() => {
      updates.forEach(({ story, date }, index) => {
        if (index < 3) {
          expect(getByText(story)).toBeInTheDocument();
        } else {
          expect(queryByText(story)).toBeNull();
        }
      });
    });
  });

  it('renders all updates when expanded', async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Updates />
      </MockedProvider>,
    );

    await wait(() => {
      fireEvent.click(getByTestId('Dots'));

      updates.forEach(({ story, date }) => {
        expect(getByText(story)).toBeInTheDocument();
      });
    });
  });
});
