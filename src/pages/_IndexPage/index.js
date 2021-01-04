import React from "react";
import styled from "styled-components";

import Layout from "@components/Layout";
import Hero from "@components/Hero";
import Biography from "@components/Biography";
import FeaturedWork from "@components/FeaturedWork";

const StyledHero = styled(Hero)`
  margin-top: 20vh;
`;

const StyledBiography = styled(Biography)`
  margin: 200px 0;
`;

const StyledFeaturedWork = styled(FeaturedWork)``;

const IndexPage = ({ className }) => {
  return (
    <Layout>
      <StyledHero
        name="Gino Jacob"
        photo="/assets/profile.jpg"
        date="02.16.2020"
        position="Currently leading a project at Scout"
      />
      <StyledBiography
        about="Lucky to have built a life-saving app, democratized technology skills, and developed some really pretty websites. I'm an engineer, and above all else, an unapologetically user-centric designer."
        status="Currently in Boston. Making cool stuff at Upstatement. Learning (or really relearning) Spanish on Duolingo. Still quarantining 😷"
      />
      <StyledFeaturedWork
        featured={[
          {
            title: "Covid Protocols",
            description:
              "Definitive clinical guidelines for frontline workers during COVID-19.",
            link: "#",
            image: "/assets/covid-protocols.png",
          },
          {
            title: "B612",
            description:
              "A simple and personal brand identity for a wellness experience service.",
            link: "#",
            image: "/assets/b612.png",
          },
        ]}
      />
    </Layout>
  );
};

export default IndexPage;
