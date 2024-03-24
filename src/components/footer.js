import React from 'react';
import styled from '@emotion/styled';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  margin-top: auto;
  text-align: center;
  padding: 20px 0 10px var(--footer-spacing);
  display: flex;
  align-content: center;
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
        <a href="https://twitter.com/yourhandle" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://facebook.com/yourpage" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://instagram.com/yourhandle" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn"><FaLinkedinIn /></a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
