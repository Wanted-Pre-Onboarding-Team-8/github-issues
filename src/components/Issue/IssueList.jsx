import React from 'react';
import { IssueListItem } from '.';

function IssueList({ issueList }) {
  return (
    <ul>
      {issueList.map((issue) => {
        return <IssueListItem issue={issue} key={issue.id} />;
      })}
    </ul>
  );
}

export default IssueList;
