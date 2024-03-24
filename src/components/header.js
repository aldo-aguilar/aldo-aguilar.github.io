import React from 'react';
import styled from '@emotion/styled';
import computerIcon from '../assets/images/test.png';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 var(--header-spacing) 0 var(--header-spacing);
`;

const HeaderImgDiv = styled.div`
  padding: 25px;
`;

const HeaderImg = styled.img`
  max-width: 50px; 
  height: auto; 
  max-height: 50px; 
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderImgDiv>
        <HeaderImg src={computerIcon} alt='computer icon' />
      </HeaderImgDiv>
      <h1>aldo</h1>
    </StyledHeader>
  );
}

export default Header;
