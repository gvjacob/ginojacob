import React from 'react';

import Link from '@components/Link';

import styled from './styled';

const LinksList = ({ className, links }) => (
  <ul className={className}>
    {links.map(({ label, to }) => (
      <li className="ff-sans-serif-body-sub" key={label}>
        <Link to={to}>{label}</Link>
      </li>
    ))}
  </ul>
);

const Footer = ({ className, links, resources, location, copyright }) => (
  <styled.Footer className={className}>
    <styled.LinksContainer>
      <styled.Logotype src="/assets/gno.svg" />
      <LinksList links={links} />
      <LinksList links={resources} />
    </styled.LinksContainer>
    <styled.CopyrightContainer>
      <p className="ff-sans-serif-body-sub">{copyright}</p>
      <styled.Location className="ff-sans-serif-body-sub">
        {location}
      </styled.Location>
    </styled.CopyrightContainer>
  </styled.Footer>
);

export default Footer;
