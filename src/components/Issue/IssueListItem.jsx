import colors from '@/styles/themes/colors';
import { changeDate } from '@/utils/util';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Advertisement } from '../common';

const ADVERTISEMENT_NUMBER = 4;

function IssueListItem({
  issue: {
    id,
    title,
    number,
    comments,
    created_at,
    user: { login },
  },
  index,
}) {
  const navigate = useNavigate();
  const handleClickIssueList = () => {
    navigate(`/${id}`);
  };

  return (
    <>
      <AdvertisementWrapper>
        {index === ADVERTISEMENT_NUMBER ? <Advertisement /> : null}
      </AdvertisementWrapper>
      <ListItemWrapper onClick={handleClickIssueList}>
        <p>#{number} </p>
        <span>{title}</span>
        <div>작성자 : {login}</div>
        <div>작성일 : {changeDate(created_at, '-')}</div>
        <div>댓글수 : {comments}</div>
      </ListItemWrapper>
    </>
  );
}

export default IssueListItem;

const AdvertisementWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ListItemWrapper = styled.li`
  border: 2px solid ${colors.shallowGray};
  border-radius: 16px;
  padding: 24px;
  
  margin: 10px 0px;
  color: ${colors.black};
  -webkit-box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.2);
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: ${colors.shallowGray};
  }
  
  span, p {
    margin-bottom: 0.5em;
  }
  
  div {
    margin-bottom: 0.25em;
  }
  
  span {
    font-size: x-large;
    font-weight: bold;
  }
  
  p {
    font-size: 0.9em;
    text-decoration: underline;
    color: ${colors.gray1}
  }
`;
