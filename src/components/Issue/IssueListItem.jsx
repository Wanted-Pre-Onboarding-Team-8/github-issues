import colors from '@/styles/themes/colors';
import { changeDate } from '@/utils/util';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function IssueListItem({
  issue: {
    id,
    title,
    number,
    comments,
    created_at,
    user: { login },
  },
}) {
  const navigate = useNavigate();
  const handleClickIssueList = () => {
    navigate(`/${id}`);
  };

  return (
    <ListItemWrapper onClick={handleClickIssueList}>
      <span>#{number} </span>
      <span>{title}</span>
      <div>작성자 : {login}</div>
      <div>작성일 : {changeDate(created_at, '-')}</div>
      <div>댓글수 : {comments}</div>
    </ListItemWrapper>
  );
}

export default IssueListItem;

const ListItemWrapper = styled.li`
  height: 100px;
  padding: 10px;
  margin: 10px 0px;
  background-color: ${colors.gray2};
  color: ${colors.white};
  :hover {
    cursor: pointer;
  }
`;
