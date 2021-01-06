import React from 'react';

import Layout from '@components/Layout';

import styled from './styled';

const ArchivePage = () => (
  <Layout>
    <styled.Topper
      title="Archive"
      description="I’ve worked in the product and agency spaces. Over the years, I’ve had a hand in unique projects and taken multiple meaningful roles."
    />
    <styled.Categories
      categories={[
        { name: 'Web Design' },
        { name: 'Front-end' },
        { name: 'Backend' },
        { name: 'Creative Direction' },
        { name: 'Branding' },
        { name: 'Logo' },
        { name: 'Open Source' },
        { name: 'Ballroom 💃' },
      ]}
    />
  </Layout>
);

export default ArchivePage;
