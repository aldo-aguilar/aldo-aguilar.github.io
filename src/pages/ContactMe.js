import React from 'react';
import styled from '@emotion/styled';

const StyledContactHeader = styled.header` 
  display: flex;
  padding: var(--page-top-spacing) var(--page-r-spacing) 0px var(--page-l-spacing);

`

function ContactMe() {
  return (
    <StyledContactHeader>
      <h1>contact ME</h1>
    </StyledContactHeader>
  );
}

export default ContactMe;
