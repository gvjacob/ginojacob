import React from "react";

import "@styles/reset.scss";
import "@styles/layout.scss";

const Layout = ({ className, children }) => {
  return (
    <>
      <header />
      <main>{children}</main>
      <footer />
    </>
  );
};

export default Layout;
