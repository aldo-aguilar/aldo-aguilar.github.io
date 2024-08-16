import React from 'react';
import styled from '@emotion/styled';
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok} from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

const FooterContainer = styled.footer`
  margin-top: auto;
  text-align: center;
  padding: 20px 0 10px var(--footer-spacing);
  display: flex;
  align-content: center;
  font-size: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    margin: 0 10px 0px 20px;
    color: black; // Icon color
    transition: transform 0.2s; // Smooth transform

    &:hover {
      transform: scale(1.1); // Enlarge icon on hover
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>aldo</div>
      <SocialIcons>
        <a href="https://scholar.google.com/citations?user=_uHoUiYAAAAJ&hl=en" aria-label="Googlescholar"><SiGooglescholar /></a>
        <a href="https://twitter.com/octaviusa42" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://www.youtube.com/@octaviusa42" aria-label="Youtube"><FaYoutube /></a>
        <a href="https://www.instagram.com/aldo.aguilar42/" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@octaviusa_42" aria-label="Tiktok"><FaTiktok /></a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
