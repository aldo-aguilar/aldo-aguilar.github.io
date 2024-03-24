import {Link} from "react-router-dom";
import styled from '@emotion/styled';

export const StyledNavbar = styled.header`
  display: flex;
  padding: 0 var(--navbar-spacing) 0 var(--navbar-spacing);
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  
  &:hover {
    color: purple; 
    text-decoration: underline;
  }

  &:visited {
    color: black;
  }

  &:active {
    color: blue;
  }

`;

export const PageLinkContainer = styled.div`
  width: 100px;
  text-align: center; 
  margin: 0 10px;
`;
