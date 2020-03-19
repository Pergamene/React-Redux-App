import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginBottom: '10px',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    marginRight: '5px',
  }
});

const ComicForm = props => {
  const classes = useStyles();
  const { isFectchingData, getData } = props;
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    getData(input);
    setInput('');
  }

  const handleChange = event => {
    setInput(event.target.value);
  };

  return (
    <Fragment>
      {isFectchingData ? (
        <div>Fetching comic...</div>
      ) : (
        <div className={classes.root}>
          <button className={classes.button} onClick={handleSubmit}>Get today's comic</button>
          <form className={classes.form} onSubmit={handleSubmit}>
            <input className={classes.input} value={input} placeholder="Comic number..." onChange={handleChange} />
            <button type="submit">Get comic by #</button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default ComicForm;
