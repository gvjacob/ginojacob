import React from "react";
import cn from "classnames";

import styled from "./styled";

const Biography = ({ className, about, status, location }) => {
  return (
    <styled.Biography className={cn(className, "ff-sans-serif-title")}>
      <styled.About>{about}</styled.About>
      <styled.Status>{status}</styled.Status>
      {location && (
        <styled.Location className="ff-mono-body">{location}</styled.Location>
      )}
    </styled.Biography>
  );
};

export default Biography;
