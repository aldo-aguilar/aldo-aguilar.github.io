import React, { useState } from 'react';
import styled from '@emotion/styled';

import blankcomputer from '../assets/images/test.png';
import aldocomputer from './assets/images/aldo-in-computer.png'


const ImageContainer = styled.img`
  float: left;
  height: 30vw;
  max-height: 450px; 
  margin-right: 20px;
  cursor: pointer;
`;

const images = [blankcomputer, aldocomputer]; // Add as many images as you have

function ComputerMe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  return (
    <ImageContainer
      src={images[currentIndex]}
      onClick={handleClick}
      alt="Aldo in computer"
    />
  );
}

export default ComputerMe;
