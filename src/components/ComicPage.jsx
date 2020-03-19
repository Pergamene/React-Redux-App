import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { getRequest } from '../redux/actions';

import ComicForm from './ComicForm';
import Comic from './Comic';

const useStyles = makeStyles({
  header: {
    margin: '10px 0 20px',
  },
})

const ComicPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comicData, isFetchingData, error] = useSelector(state => [state.comicData, state.isFetchingData, state.error]);

  const getData = comicNumber => {
    dispatch(getRequest(comicNumber));
  }

  return (
    <Fragment>
      <h1 className={classes.header}>xkcd Comic!</h1>
      <ComicForm isFetchingData={isFetchingData} getData={getData} />
      <Comic comicData={comicData} error={error} />
    </Fragment>
  );
};

export default ComicPage;
