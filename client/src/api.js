import axios from 'axios';

export const apiDomainUrl = process.env.REACT_APP_API_DOMAIN || 'http://localhost:8000';

export default axios.create({
  withCredentials: true,
  baseURL: `${apiDomainUrl}/v1`,
  responseType: 'json',
});
