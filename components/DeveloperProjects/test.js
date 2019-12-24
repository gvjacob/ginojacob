import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';

import { DEVELOPER_PROJECTS_QUERY } from '../../queries';
import DeveloperProjects from './';

describe('DeveloperProjects', () => {
  const projects = [
    {
      title: 'Jive',
      subtitle: 'Spotify DJ',
      assets: [{ asset: { sourceUrl: 'jive.ginojacob.com' } }],
      url: 'jive.ginojacob.com',
      repositoryUrl: 'jive.github.com',
    },
    {
      title: 'Chef',
      subtitle: 'recipe platform',
      assets: [{ asset: { sourceUrl: 'chef.ginojacob.com' } }],
      url: 'chef.ginojacob.com',
      repositoryUrl: 'chef.github.com',
    },
  ];

  const mocks = [
    {
      request: {
        query: DEVELOPER_PROJECTS_QUERY,
      },
      result: {
        data: {
          getProjectList: { items: projects },
        },
      },
    },
  ];

  it('renders', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DeveloperProjects />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('DeveloperProjects')).toBeInTheDocument();
    });
  });

  it('renders all project cards', async () => {
    const { getAllByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DeveloperProjects />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getAllByTestId('Card')).toHaveLength(projects.length);
    });
  });
});
