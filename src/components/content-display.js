import React from "react";
import styled from "@emotion/styled";

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  max-width: 800px;
  gap: 20px;
`

const EntryImage = styled.img`
  width: 50%;
  height: auto;
`

const EntryDescription = styled.div`
  flex-grow: 1;
  padding: 10px;
  height: 150px;
`

const ContentColumnDisplay = ({entries}) => (
    <>
        {entries.map((entry)=> (
            <Entry key={entry.id}>
                <EntryImage src={entry.imageUrl} alt={entry.title} />
                <EntryDescription>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                </EntryDescription>
            </Entry>
        ))}
    </>
);

export default ContentColumnDisplay