import React from "react";
import styled from "styled-components";

import Layout from "@components/Layout";
import Hero from "@components/Hero";
import Biography from "@components/Biography";

const StyledHero = styled(Hero)`
  margin-top: 20vh;
`;

const StyledBiography = styled(Biography)`
  margin: 100px 0;
`;

const IndexPage = ({ className }) => {
  return (
    <Layout>
      <StyledHero />
      <StyledBiography />
    </Layout>
  );
};

export default IndexPage;
