import React from "react";

import Link from "@components/Link";

import styled from "./styled";

const Work = ({ className, title, description, image, link }) => (
  <article>
    <styled.ProjectImage src={image} />
    <h3>
      <Link to={link}>{title}</Link>
    </h3>
    <p>{description}</p>
  </article>
);

const FeaturedWork = ({ className, featured }) => {
  return (
    <styled.Container className={className}>
      {featured.map((work, i) => (
        <Work key={i} {...work} />
      ))}
    </styled.Container>
  );
};

export default FeaturedWork;
