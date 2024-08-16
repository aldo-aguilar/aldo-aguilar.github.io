import React from 'react';
import styled from '@emotion/styled';

import ContentColumnDisplay from '../components/content-column-display';

import crowdpleaserThumbnail from './assets/images/crowdpleaser-thumbnail.png'
import digitalArt from './assets/images/digital-art-thumbnail.png'
import drawings from './assets/images/drawings-thumbnail.png'
import hTrees from './assets/images/h-trees-thumbnail.png'
import sis from './assets/images/sisyphus2-0-graphic.png'
import audacity from './assets/images/audacity-thumbnail.png'


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
      title: 'crowdpleaser lighting',
      description: "testing the project description",
      imageUrl: crowdpleaserThumbnail,
      projectUrl: "https://tylerfelson.com/work/experiential/lighting-system/"
    },
    // {
    //   id: 2,
    //   title: 'digital art',
    //   description: "testing the project description",
    //   imageUrl: digitalArt,
    // },
    {
      id: 3,
      title: 'drawings',
      description: "testing the project description",
      imageUrl: drawings,
      projectUrl: '/art'
    },
    {
      id: 4,
      title: 'h-trees',
      description: "testing the project description",
      imageUrl: hTrees,
      projectUrl: "https://interactiveaudiolab.github.io/project/music-trees.html",
    },
    {
      id: 5, 
      title: 'sisyphus 2.0',
      description: "Interactive sound & lighting installation",
      imageUrl: sis,
      projectUrl: "http://www.sisyphus2.com/",
    },
    {
      id: 6,
      title: 'deep learning tools for audacity',
      description: "deep learning models in the audacity audio editor",
      imageUrl: audacity,
      projectUrl: "https://interactiveaudiolab.github.io/project/audacity.html",
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
