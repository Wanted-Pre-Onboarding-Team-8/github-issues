import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { IssueListItem } from '.';

function IssueDetailContent({ detailIssue }) {
  const {
    body,
    user: { login, avatar_url },
  } = detailIssue;
  return (
    <IssueDetailWrapper>
      <IssueHeaderWrapper>
        <li>
          <img src={avatar_url} alt={login} />
        </li>
        <IssueListItem issue={detailIssue} index={0} />
      </IssueHeaderWrapper>
      <ReactMarkdown>{body}</ReactMarkdown>
    </IssueDetailWrapper>
  );
}

export default IssueDetailContent;

const IssueDetailWrapper = styled.div`
  margin-top: 5em;
  padding: 20px;
`;
const IssueHeaderWrapper = styled.ul`
  padding: 0 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
