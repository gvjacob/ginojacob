import React from "react";

import styled from "./styled";

const Profile = ({ className }) => {
  return (
    <styled.Profile className={className}>
      <styled.Photo src="/assets/profile.jpg" />
      <styled.Logotype src="/assets/gno.svg" />
    </styled.Profile>
  );
};

export default Profile;
