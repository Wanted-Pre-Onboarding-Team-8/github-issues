import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IssueListItem } from '.';

function IssueList({ issueList }) {
  const navigate = useNavigate();
  const handleClickIssueList = (number) => {
    navigate(`/${number}`);
  };

  return (
    <ul>
      {issueList.map((issue) => {
        return (
          <IssueListItem
            issue={issue}
            key={issue.id}
            onClick={handleClickIssueList}
          />
        );
      })}
    </ul>
  );
}

export default IssueList;
