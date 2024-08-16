import React from 'react';
import styled from '@emotion/styled';

import ContentFlexGrid from '../components/content-flexgrid-display'

import ghibli from './assets/images/art/drawings/ghibli-1.jpg'
import abstract from './assets/images/art/drawings/may-piece.jpg'
import web from './assets/images/art/drawings/aldo-web.jpg'
import house1 from './assets/images/art/drawings/gma-house1.jpg'
import house2 from './assets/images/art/drawings/gma-house2.JPEG'
import house3 from './assets/images/art/drawings/gma-house3.JPEG'
// import figures1 from './assets/images/art/drawings/figures1.jpg'

import gothic1 from './assets/images/art/td/gothic_patterns1.gif'
import SM_BLOBS1 from './assets/images/art/td/SM_DANCE_CUT1.gif'

const StyledArtHeader = styled.header` 
  display: flex;
  padding: var(--page-top-spacing) var(--page-r-spacing) 0px var(--page-l-spacing);
  flex-direction: column;
`

function Art() {

  const artworks = [
    {
      id: 7,
      title: 'touch designer gothic patterns',
      description: "gothic patterns made in touch designer",
      imageUrl: gothic1
    },
    {
      id: 7,
      title: 'SPIDER_MAN_BLOB_TRACKING',
      description: "dancing spiderman gif with blob tracking made in touch designer",
      imageUrl: SM_BLOBS1
    },
    {
      id: 1,
      title: 'abstract ink drawing',
      description: "lines and lines",
      imageUrl: abstract,
    },
    {
      id: 3,
      title: 'CYBER_WEB',
      description: "bic pen drawing, web of ideas and forms",
      imageUrl: web
    },
    {
      id: 2,
      title: 'studio ghibli characters',
      description: "characters",
      imageUrl: ghibli
    },
    {
      id: 4,
      title: 'G_HOUSE1',
      description: "mini home drawing ",
      imageUrl: house1
    },
    {
      id: 5,
      title: 'G_HOUSE2',
      description: "mini home drawing ",
      imageUrl: house2
    },
    {
      id: 6,
      title: 'G_HOUSE3',
      description: "mini home drawing ",
      imageUrl: house3
    },
  ];

  return (
    <StyledArtHeader>
      <h1>art</h1>
      <ContentFlexGrid entries={artworks}/>
    </StyledArtHeader>
  );
}

export default Art;
