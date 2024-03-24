import React from "react";
import styled from "@emotion/styled";

const FlexGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 0;
`

const FlexGridEntry = styled.img`
    max-width:100%;
    height: auto;
`

const ContentFlexGrid = ({entries}) => (
    <FlexGridContainer>
        {entries.map(entry => (
            <FlexGridEntry key={entry.id} src={entry.imageUrl} alt={entry.title}/>
        ))}
    </FlexGridContainer>
);

export default ContentFlexGrid