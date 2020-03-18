import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRequest } from '../redux/actions';

import ComicForm from './ComicForm';
import Comic from './Comic';

const ComicPage = () => {
  const dispatch = useDispatch();
  const [comicData, isFetchingData, error] = useSelector(state => [state.comicData, state.isFetchingData, state.error]);

  const getData = comicNumber => {
    dispatch(getRequest(comicNumber));
  }

  return (
    <div>
      <ComicForm isFetchingData={isFetchingData} getData={getData} />
      <Comic comicData={comicData} error={error} />
    </div>
  );
};

export default ComicPage;
