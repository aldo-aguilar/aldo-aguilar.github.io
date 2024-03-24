import React from 'react';
import {StyledNavbar, PageLinkContainer, StyledLink} from './styles/navigation-bar-style'
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Use the useLocation hook

  // A list of all possible navigation links
  const links = [
    { to: '/', text: 'home' },
    { to: '/art', text: 'art' },
    { to: '/contact', text: 'contact me' },
    { to: '/projects', text: 'projects' },
  ];

  return (
    <StyledNavbar>
      {links
        .filter(link => link.to !== location.pathname)
        .map((link, index) => (
          <PageLinkContainer key={index}>
            <StyledLink to={link.to}>{link.text}</StyledLink>
          </PageLinkContainer>
        ))}
    </StyledNavbar>
  );
}

export default Navbar;
