import CONFIG from './config';

const API_ENDPOINT = {
  Confirmed: `${CONFIG.BASE_URL}confirmed`,
  Recovered: `${CONFIG.BASE_URL}recovered`,
  Death: `${CONFIG.BASE_URL}death`,
};

export default API_ENDPOINT;
