import React from 'react';
import { changeDate } from '@/utils/util';
import styled from 'styled-components';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { CgCalendarDates } from 'react-icons/cg';
import colors from '@/styles/themes/colors';

function IssueListItem({
  issue: {
    title,
    number,
    comments,
    created_at,
    user: { login },
  },
  onClick,
}) {
  return (
    <ListItemWrapper
      isClickActive={onClick ? true : false}
      onClick={onClick ? () => onClick(number) : () => {}}
    >
      <div>
        <TitleWrapper>
          <span>#{number} </span>
          <span>{title}</span>
        </TitleWrapper>
        <UserInfoWrap>
          <div>
            <AiOutlineUser />
            <span>{login}</span>
          </div>
          <div>
            <CgCalendarDates />
            <span>{changeDate(created_at, '-')}</span>
          </div>
        </UserInfoWrap>
      </div>
      <CommentsWrap>
        <BiCommentDetail />
        <span>{comments}</span>
      </CommentsWrap>
    </ListItemWrapper>
  );
}

export default IssueListItem;

const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 10px ${colors.gray2};
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 10px 0px;
  :hover {
    cursor: ${({ isClickActive }) => (isClickActive ? 'pointer' : 'default ')};
  }
`;
const TitleWrapper = styled.div`

`
const UserInfoWrap = styled.div`
  display: flex;
  margin-top: 15px;
  > div {
    margin-right: 10px;
    display: flex;
    align-items: center;
    > svg {
      margin-right: 5px;
    }
  }
`;

const CommentsWrap = styled.div`
  display: flex;
  align-items: center;
  > svg {
    margin-right: 6px;
  }
`;
