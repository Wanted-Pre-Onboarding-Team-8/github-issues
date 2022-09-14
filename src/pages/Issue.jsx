import React, { useEffect, useContext, useState } from 'react';
import { getIssues } from '@/apis/github';
import { IssueList } from '@/components/Issue';
import { useIntersection } from '@/hooks';
import { GithubContext } from '@/store/github';
import styled from 'styled-components';
import { Spinner } from '@/components';

const DEFAULT_PER_PAGE_COUNT = 10;
const DEFAULT_SORT_STRING = 'comments';

function Issue() {
  const { issueList, setIssueList } = useContext(GithubContext);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [observeElement, setObserveElement] = useState(null);
  const isShowObserve = useIntersection(observeElement);

  useEffect(() => {
    return () => {
      setIssueList([]);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    getIssues({
      page,
      perPage: DEFAULT_PER_PAGE_COUNT,
      sort: DEFAULT_SORT_STRING,
    })
      .then((res) => {
        setLoading(false);
        setIssueList((prevIssueList) => {
          return [...prevIssueList, ...res.data];
        });
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [page]);

  const handlePageUp = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    isShowObserve && handlePageUp();
  }, [isShowObserve]);

  return (
    <Wrap>
      <IssueList issueList={issueList} />
      {!loading && <div ref={setObserveElement}></div>}
      {loading && (
        <SpinnerWrap page={page}>
          <Spinner />
        </SpinnerWrap>
      )}
    </Wrap>
  );
}

export default Issue;

const Wrap = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const SpinnerWrap = styled.div`
  margin-top: 1em;
  height: ${({ page }) => (page === 1 ? `calc(100vh - 4em)` : 'auto')};
  text-align: center;
`;
