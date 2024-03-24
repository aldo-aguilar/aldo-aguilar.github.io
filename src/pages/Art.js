import React from 'react';
import styled from '@emotion/styled';

const StyledArtHeader = styled.header` 
  display: flex;
  padding: var(--page-top-spacing) var(--page-r-spacing) 0px var(--page-l-spacing);

`

function Art() {
  return (
    <StyledArtHeader>
      <h1>art</h1>
    </StyledArtHeader>
  );
}

export default Art;
