import React from 'react';

import Layout from '@components/Layout';
import FeaturedWork from '@components/FeaturedWork';

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
    <FeaturedWork
      featured={[
        {
          title: 'B612',
          description:
            'A simple and personal brand identity for a wellness experience service.',
          link: '#',
          image: '/assets/b612.png',
        },
        {
          title: 'Covid Protocols',
          description:
            'Definitive clinical guidelines for frontline workers during COVID-19.',
          link: '#',
          image: '/assets/covid-protocols.png',
        },
      ]}
    />
    <styled.TeaseList
      projects={[
        {
          title: 'Covid Protocols',
          description:
            'Definitive clinical guidelines for frontline workers during COVID-19.',
          link: '#',
        },
        {
          title: 'B612',
          description:
            'A simple and personal brand identity for a wellness experience service.',
          link: '#',
        },
      ]}
    />
  </Layout>
);

export default ArchivePage;
