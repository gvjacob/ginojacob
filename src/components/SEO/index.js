import React from 'react';
import Helmet from 'react-helmet';

const Title = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta property="twitter:title" content={title} />
  </Helmet>
);

const Description = ({ description }) => (
  <Helmet>
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="twitter:description" content={description} />
  </Helmet>
);

const Image = ({ image }) => (
  <Helmet>
    <meta property="twitter:image" content={image} />
    <meta property="og:image" content={image} />
  </Helmet>
);

const SEO = ({ title, description, image }) => {
  const SITE_URL = 'https://ginojacob.com';

  return (
    <>
      {title && <Title title={title} />}
      {description && <Description description={description} />}
      {image && <Image image={`${SITE_URL}${image}`} />}

      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
    </>
  );
};

export default SEO;
