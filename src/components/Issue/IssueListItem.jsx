import React from 'react';
import { changeDate } from '@/utils/util';
import styled from 'styled-components';
import { Advertisement } from '../common';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { CgCalendarDates } from 'react-icons/cg';
import colors from '@/styles/themes/colors';

const ADVERTISEMENT_NUMBER = 4;

function IssueListItem({
  issue: {
    title,
    number,
    comments,
    created_at,
    user: { login },
  },
  index,
  onClick,
}) {
  return (
    <>
      <AdvertisementWrapper>
        {index === ADVERTISEMENT_NUMBER ? <Advertisement /> : null}
      </AdvertisementWrapper>
      <ListItemWrapper
        isClickActive={onClick ? true : false}
        onClick={onClick ? () => onClick(number) : () => {}}
      >
        <div>
          <TitleWrapper>
            <span>#{number} </span>
            <p>{title}</p>
          </TitleWrapper>
          <UserInfoWrap>
            <div>
              <AiOutlineUser />
              <span>{login}</span>
            </div>
            <div>
              <CgCalendarDates />
              <span>{changeDate(created_at)}</span>
            </div>
          </UserInfoWrap>
        </div>
        <CommentsWrap>
          <BiCommentDetail />
          <span>{comments}</span>
        </CommentsWrap>
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
  width: 100%;
  border: 2px solid ${colors.shallowGray};
  border-radius: 16px;
  padding: 24px;

  margin: 10px 0px;
  color: ${colors.black};
  box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;

  :hover {
    cursor: ${({ isClickActive }) => (isClickActive ? 'pointer' : 'default')};
    background-color: ${({ isClickActive }) =>
      isClickActive ? colors.shallowGray : colors.white};
  }
`;

const TitleWrapper = styled.div`
  > span {
    font-size: 0.9em;
    text-decoration: underline;
    color: ${colors.gray1};
  }

  > p {
    margin-top: 12px;
    font-size: x-large;
    font-weight: bold;
  }
`;

const UserInfoWrap = styled.div`
  display: flex;

  margin-top: 15px;
  > div {
    margin-right: 10px;
    display: flex;
    align-items: center;
    line-height: normal;
    > svg {
      padding-bottom: 2px;
      margin-right: 5px;
    }
  }
`;

const CommentsWrap = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  > svg {
    margin-right: 6px;
  }
`;
