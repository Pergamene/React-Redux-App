import React, { useState, Fragment } from 'react';

const ComicForm = props => {
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
        <div>
          <button onClick={handleSubmit}>Get today's comic</button>
          <form onSubmit={handleSubmit}>
            <input value={input} placeholder="Comic number..." onChange={handleChange} />
            <button type="submit">Get comic by #</button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default ComicForm;
