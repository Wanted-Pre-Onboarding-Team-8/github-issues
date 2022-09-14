import { useState } from 'react';
import { createContext } from 'react';

export const GithubContext = createContext({
  issueList: [],
  setIssueList: () => {},
});

function GithubStore({ children }) {
  const [issueList, setIssueList] = useState([]);

  return (
    <GithubContext.Provider value={{ issueList, setIssueList }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubStore;
