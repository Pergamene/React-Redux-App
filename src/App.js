import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ComicPage from './components/ComicPage';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    border: '2px solid #000',
    height: '100%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={`App ${classes.root}`}>
      <ComicPage />
    </div>
  );
}

export default App;
