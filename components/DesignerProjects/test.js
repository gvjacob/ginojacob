import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';

import { DESIGNER_PROJECTS_QUERY } from '../../queries';
import DesignerProjects from './';

describe('DesignerProjects', () => {
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
        query: DESIGNER_PROJECTS_QUERY,
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
        <DesignerProjects />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('DesignerProjects')).toBeInTheDocument();
    });
  });

  it('renders all project cards', async () => {
    const { getAllByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DesignerProjects />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getAllByTestId('Card')).toHaveLength(projects.length);
    });
  });
});
