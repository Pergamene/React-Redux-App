import { GET_REQUEST, UPDATE_COMIC, SET_ERROR } from './actions';

const emptyComicData = {
  title: '',
  img: '',
  transcript: '',
  alt: '',
  day: '',
  month: '',
  year: '',
};

const initialState = {
  comicData: emptyComicData,
  isFetchingData: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  console.log('STATE (in reducer): ', state);
  console.log('ACTION (in reducer): ', action);
  switch(action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isFetchingData: true,
        comicData: emptyComicData,
      };
    case UPDATE_COMIC:
      return {
        ...state,
        isFetchingData: false,
        comicData: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      }
    default:
      return state;
  }
};
