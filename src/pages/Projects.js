import React from 'react';
import styled from '@emotion/styled';

import ContentColumnDisplay from '../components/content-display';

import crowdpleaserThumbnail from './assets/images/crowdpleaser-thumbnail.png'
import digitalArt from './assets/images/digital-art-thumbnail.png'
import drawings from './assets/images/drawings-thumbnail.png'
import hTrees from './assets/images/h-trees-thumbnail.png'


const StyledProjectHeader = styled.header` 
  display: flex;
  flex-direction: column;
  padding: var(--page-top-spacing) var(--page-r-spacing) 0px var(--page-l-spacing);
`
const ProjectsHeading = styled.h2`

`


function Projects() {
  const projects = [
    {
      id: 1,
      title: 'crowdpleaser',
      description: "testing the project description",
      imageUrl: crowdpleaserThumbnail,
    },
    {
      id: 2,
      title: 'digital art',
      description: "testing the project description",
      imageUrl: digitalArt,
    },
    {
      id: 3,
      title: 'drawings',
      description: "testing the project description",
      imageUrl: drawings,
    },
    {
      id: 2,
      title: 'h-trees',
      description: "testing the project description",
      imageUrl: hTrees,
    }
  
  ]

  return (
    <StyledProjectHeader>
        <ProjectsHeading>projects</ProjectsHeading>
        <ContentColumnDisplay entries={projects} />
    </StyledProjectHeader>
  );
}

export default Projects;
