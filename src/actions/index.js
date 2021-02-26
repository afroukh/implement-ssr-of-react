import axios from 'axios';
import https from 'https';
export const FETCH_REQUEST_QUERY = 'fetch_request_query';

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export const fetchRequestQuery = async (dispatch) => {
  const { data } = await axios.get('https://localhost:44331/Contenu/MessageOperationnel/fr-ca/messagesoperationnels',  { httpsAgent: agent });

  dispatch({
    type: FETCH_REQUEST_QUERY,
    payload: data,
  });
};
