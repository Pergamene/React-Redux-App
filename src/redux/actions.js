import axios from 'axios';

export const GET_REQUEST = 'GET_REQUEST';
export const UPDATE_COMIC = 'UPDATE_COMIT';
export const SET_ERROR = 'SET_ERROR';

export const getRequest = number => dispatch => {
  let comicNumber;
  let url;
  if (number === '') {
    url = 'http://xkcd.com/info.0.json';
  } else {
    if (number > 2282) {
      comicNumber = 2282;
    } else if (number < 1) {
      comicNumber = 1;
    } else {
      comicNumber = number;
    }
    url = `http://xkcd.com/${comicNumber}/info.0.json`;
  }
  dispatch({ type: GET_REQUEST });
    axios.get(url).then(response => {
      const comic = response.data;
      dispatch({ type: UPDATE_COMIC, payload: comic });
    }).catch(() => {
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'});
    });
};
