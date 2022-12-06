import { ltoken } from "./Token";

const { REACT_APP_DOMAIN } = process.env.REACT_APP_DOMAIN;

export const PostMethod = (route, data) => {
  const res = {
    method: "POST",
    url: `${REACT_APP_DOMAIN}${route}`,
    data,
    headers: {
      Accept: "application/json",
      authorization: ltoken,
    },
  };
  return res;
};
