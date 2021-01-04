import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

import "@styles/index.scss";
import "normalize.css";

import styled from "./styled";

const Layout = ({ children }) => {
  const links = [
    {
      label: "Bio",
      to: "#",
    },
    {
      label: "Work",
      to: "#",
    },
    {
      label: "Case Studies",
      to: "#",
    },
  ];

  return (
    <>
      <Header links={links} />
      <styled.Main>{children}</styled.Main>
      <Footer
        links={[
          {
            label: "GitHub",
            to: "https://github.com/gvjacob",
          },
          {
            label: "LinkedIn",
            to: "https://www.linkedin.com/in/gvjacob/",
          },
        ]}
        resources={[
          {
            label: "Résumé",
            to:
              "https://indd.adobe.com/view/4b441bbf-c9c3-47d9-b0d4-e49ab74806cb",
          },
          {
            label: "gvjacob@outlook.com",
            to: "mailto:gvjacob@outlook.com",
          },
          {
            label: "(909) 213 - 4090",
          },
        ]}
        location="2nd January 2021. Boston, MA. 37°F cloudy"
        copyright="2020 © Gino Jacob"
      />
    </>
  );
};

export default Layout;
