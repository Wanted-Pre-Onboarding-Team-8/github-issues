import React from 'react';
import styled from 'styled-components';
import { IssueListItem } from '.';

function IssueList({ issueList }) {
  return (
    <Wrap>
      <ul>
        {issueList.map((issue, index) => {
          return <IssueListItem issue={issue} index={index} key={issue.id} />;
        })}
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default IssueList;
