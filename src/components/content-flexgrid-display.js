import React, { useState } from "react";
import styled from "@emotion/styled";

const FlexGridContainer = styled.div`
    label: FlexGridContainer;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 10px;
    position: relative; // For positioning the overlay and modal image
`

const FlexGridEntry = styled.div`
    label: FlexGridEntry;
    max-width: 25vw;
    max-height: 30vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; // Needed for positioning and z-index control
    cursor: pointer; // To show interactive cursor
`

const FlexGridImage = styled.img`
  label: FlexGridImage;
  width: 256px;
  height: 256px;
  object-fit: cover;
  max-height: 100%;
  transition: transform 0.3s ease; // Smooth transition for transforming
`;

const Overlay = styled.div`
  label: Overlay;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  label: ModalImage;
  width: auto;  // Control width relative to viewport width
  height: auto;  // Height is automatic to preserve aspect ratio
  max-height: 80vh;  // Limit the height to 80% of viewport height
  transition: transform 5s ease;
`;




const ContentFlexGrid = ({ entries }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImgClick = (img) => {
    setSelectedImg(img);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

  return (
    <FlexGridContainer onClick={handleClose}>
      {entries.map((entry) => (
        <FlexGridEntry key={entry.id} onClick={(e) => {
          e.stopPropagation(); // Prevent triggering container's onClick
          handleImgClick(entry.imageUrl);
        }}>
          <FlexGridImage src={entry.imageUrl} alt={entry.description || "Artwork"} />
        </FlexGridEntry>
      ))}
      {selectedImg && (
        <Overlay>
          <ModalImage src={selectedImg} alt={"Enlarged work of:" + selectedImg.title } onClick={(e) => e.stopPropagation()} />
        </Overlay>
      )}
    </FlexGridContainer>
  );
};

export default ContentFlexGrid;
