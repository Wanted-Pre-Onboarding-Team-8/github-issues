import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IssueListItem } from '.';

function IssueList({ issueList }) {
  const navigate = useNavigate();
  const handleClickIssueList = (number) => {
    navigate(`/${number}`);
  };

  return (
    <Wrap>
      {issueList.map((issue, index) => {
        return (
          <IssueListItem
            issue={issue}
            index={index}
            key={issue.id}
            onClick={handleClickIssueList}
          />
        );
      })}
    </Wrap>
  );
}

export default IssueList;

const Wrap = styled.ul`
  width: 100%;
`;
