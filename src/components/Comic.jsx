import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderTop: '1px solid #000',
    width: '100%',
  },
  title: {
    margin: '10px 0 0',
  },
  date: {
    fontSize: '12px',
    fontStyle: 'italic',
  },
  alt: {
    margin: '20px auto',
    maxWidth: '60%',
  }
});

const Comic = props => {
  const classes = useStyles();
  const { error } = props;
  const { title, img, transcript, alt, day, month, year } = props.comicData;
  console.log("PROPS (in Comic): ", props);

  if (title !== '') {
    return (
      <Fragment>
        {error === '' ? (
          <div className={classes.root}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.date}>{month}/{day}/{year}</div>
            <img src={img} alt={transcript ? transcript : "xkcd comic"} />
            <div className={classes.alt}>{alt}</div>
          </div>
        ) : (
          <div>{error}</div>
        )}
      </Fragment>
    );
  }
  return (
    <div></div>
  );
};

export default Comic;
