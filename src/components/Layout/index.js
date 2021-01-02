import React from "react";
import "@src/reset.css";

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
