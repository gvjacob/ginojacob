import React from "react";

import Profile from "@components/Profile";
import styled from "./styled";

const CenterProfile = styled.center(Profile);

const Hero = ({ className }) => {
  return (
    <styled.Hero>
      <CenterProfile />
    </styled.Hero>
  );
};

export default Hero;
