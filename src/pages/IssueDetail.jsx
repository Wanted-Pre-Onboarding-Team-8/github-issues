import React, { useEffect } from 'react';
import { IssueDetailContent } from '@/components/Issue';
import { useLocation } from 'react-router-dom';
import { getIssueDetail } from '@/apis/github';
import { useState } from 'react';

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
    <div>
      {loading && <div>디테일 로딩중</div>}
      {detailIssue && <IssueDetailContent detailIssue={detailIssue} />}
    </div>
  );
}

export default IssueDetail;
