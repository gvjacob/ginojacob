import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';

import { EXPERIENCES_QUERY } from '../../queries';
import Experiences from './';

describe('Experiences', () => {
  const experiences = [
    {
      company: 'Pluralsight',
      position: 'Software Engineer',
      asset: { sourceUrl: null },
      url: 'pluralsight.ginojacob.com',
    },
    {
      company: 'Upstatement',
      position: 'Web Apprentice',
      asset: { sourceUrl: null },
      url: 'upstatement.ginojacob.com',
    },
  ];

  const mocks = [
    {
      request: { query: EXPERIENCES_QUERY },
      result: {
        data: {
          getExperienceList: { items: experiences },
        },
      },
    },
  ];

  it('renders', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Experiences />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('Experiences')).toBeInTheDocument();
    });
  });

  it('renders all experience cards', async () => {
    const { getAllByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Experiences />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getAllByTestId('Card')).toHaveLength(experiences.length);
    });
  });
});
