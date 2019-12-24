import React from 'react';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { ABOUT_QUERY, UPDATES_QUERY } from '../../queries';
import About from './';

describe('About', () => {
  const currentExperience = {
    position: 'Software Engineer',
    company: 'Pluralsight',
    companyUrl: 'www.pluralsight.com',
  };

  const updates = [
    {
      story:
        'Currently working on a Spotify widget for peer-to-peer song recommendations',
      date: null,
      bookmark: true,
    },
  ];

  const about = 'This is about me';

  const mocks = [
    {
      request: {
        query: ABOUT_QUERY,
      },
      result: {
        data: {
          getExperienceList: {
            items: [currentExperience],
          },
          getBiography: {
            about,
          },
        },
      },
    },
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
        <About />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('About')).toBeInTheDocument();
    });
  });

  it('renders position and company', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <About />
      </MockedProvider>,
    );

    await wait(() => {
      const { position, company } = currentExperience;

      expect(getByText(position)).toBeInTheDocument();
      expect(getByText(company)).toBeInTheDocument();
    });
  });

  it('renders about markdown', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <About />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByText(about)).toBeInTheDocument();
    });
  });
});
