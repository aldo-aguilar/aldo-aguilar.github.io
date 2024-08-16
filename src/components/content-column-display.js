import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 800px;
  gap: 10%;
  margin-bottom: 5%;
`

const EntryImage = styled.img`
  width: 50%;
  height: auto;
  cursor: pointer; // Add a cursor pointer to indicate clickable
`

const EntryDescription = styled.div`
  flex-grow: 1;
  padding: 10px;
`

const ContentColumnDisplay = ({entries}) => {
  const navigate = useNavigate();

  const navigateToUrl = (url) => {
    if (/^https?:\/\//.test(url)) {
      window.location.href = url;
    } 
    else {
      navigate(url);
    }
  };

  return(
    <>
        {entries.map((entry)=> (
            <Entry key={entry.id}>
              <EntryImage src={entry.imageUrl} alt={entry.title} onClick={() => navigateToUrl(entry.projectUrl)}/>
              <EntryDescription>
                  <h3>{entry.title}</h3>
                  {/* <p>{entry.description}</p> */}
              </EntryDescription>
            </Entry>
        ))}
    </>
  )
};

export default ContentColumnDisplay