import React from 'react';
import { get } from 'lodash';
import StackGrid from 'react-stack-grid';
import cn from 'classnames';

import Card, { GITHUB, LINK } from '../Card';
import withQuery from '../../hocs/withQuery';
import { DEVELOPER_PROJECTS_QUERY } from '../../queries';

import css from './styles.css';

const DeveloperProjects = ({ className, data }) => {
  const {
    getProjectList: { items },
  } = data;

  return (
    <div
      className={cn('jumpto', css.projects, className)}
      data-testid={'DeveloperProjects'}
      id={'Projects'}
    >
      <StackGrid
        columnWidth={'33%'}
        gutterHeight={10}
        gutterWidth={10}
        enableSSR
        monitorImagesLoaded
      >
        {items.map(({ title, subtitle, assets, url, repositoryUrl }) => (
          <Card
            title={title}
            subtitle={subtitle}
            asset={get(assets, [0, 'asset', 'sourceUrl'], null)}
            key={title}
            icons={[
              { url: repositoryUrl, faClass: GITHUB },
              { url: url, faClass: LINK },
            ]}
          />
        ))}
      </StackGrid>
    </div>
  );
};

export default withQuery(DeveloperProjects, DEVELOPER_PROJECTS_QUERY);
