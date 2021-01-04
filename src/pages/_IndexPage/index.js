import React from "react";
import styled from "styled-components";

import Layout from "@components/Layout";
import Hero from "@components/Hero";

const StyledHero = styled(Hero)`
  margin-top: 10%;
`;

const IndexPage = ({ className }) => {
  return (
    <Layout>
      <StyledHero />
    </Layout>
  );
};

export default IndexPage;
