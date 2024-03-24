import React from 'react';
import styled from '@emotion/styled';

import ComputerMe from '../components/computerMe'; 

const StyledHomeHeader = styled.header` 
  display: flex;
  flex-direction: column;
  padding: var(--page-top-spacing) var(--page-r-spacing) 0px var(--page-l-spacing);
`
const AboutHeading = styled.h2`

`
const AboutBody = styled.div`
`
const AboutDescription = styled.div`
`


function Home() {
  return (
    <StyledHomeHeader>
      <AboutHeading>about me</AboutHeading>
      <AboutBody>
        <ComputerMe>
        </ComputerMe>
        <AboutDescription>
          <p>my name is aldo aguilar :] i enjoy working on art installations, drawing, sound art, and anything that involves building and being creative. currently i live in new york city and am exploring making art that bridges the digital creative world into the physical.</p>
          <br></br>
          <p>if you're interested in collaborating with me, please feel free to reach out via my email or social media</p>
        </AboutDescription>


      </AboutBody>
    </StyledHomeHeader>
  );
}

export default Home;
 