import { ISSUE_URL } from '@/consts';
import http from './base';

export const getIssues = ({ page, perPage, sort }) => {
  return http.get({
    url: ISSUE_URL,
    params: {
      page,
      per_page: perPage,
      sort,
    },
  });
};
