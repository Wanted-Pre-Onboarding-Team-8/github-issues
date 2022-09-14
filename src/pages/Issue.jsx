import React, { useEffect, useContext, useState } from 'react';
import { getIssues } from '@/apis/github';
import { IssueList } from '@/components/Issue';
import { useIntersection } from '@/hooks';
import { GithubContext } from '@/store/github';

const DEFAULT_PER_PAGE_COUNT = 10;
const DEFAULT_SORT_STRING = 'comments';

function Issue() {
  const { issueList, setIssueList } = useContext(GithubContext);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [observeElement, setObserveElement] = useState(null);
  const isShowObserve = useIntersection(observeElement);

  useEffect(()=> {
    return () => {
      setIssueList([]);
    }
  }, [])

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
    <div>
      <IssueList issueList={issueList} />
      {!loading && <div ref={setObserveElement}></div>}
      {loading && <div>로딩중</div>}
    </div>
  );
}

export default Issue;
