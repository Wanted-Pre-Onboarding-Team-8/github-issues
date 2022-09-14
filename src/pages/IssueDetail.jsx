import React, { useEffect } from 'react';
import { IssueDetailContent } from '@/components/Issue';
import { useLocation } from 'react-router-dom';
import { getIssueDetail } from '@/apis/github';
import { useState } from 'react';
import styled from 'styled-components';
import { Spinner } from '@/components';

function IssueDetail() {
  const location = useLocation();
  const [detailIssue, setDetailIssue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathId = location.pathname.split('/')[1];
    setLoading(true);
    getIssueDetail({ id: pathId })
      .then((res) => {
        setDetailIssue(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [location]);

  return (
    <>
      {loading && (
        <SpinnerWrap>
          <Spinner />
        </SpinnerWrap>
      )}
      <Wrap>
        {detailIssue && <IssueDetailContent detailIssue={detailIssue} />}
      </Wrap>
    </>
  );
}

export default IssueDetail;

const Wrap = styled.div`
  box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

const SpinnerWrap = styled.div`
  height: calc(100vh - 4em);
  text-align: center;
`;
