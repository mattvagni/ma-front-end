import React from 'react';
import { actions } from '../../state/counter';

const Home = ({ count, dispatch }) => {
  const onIncrement = () => {
    dispatch(actions.increment());
  };

  const onDecrement = () => {
    dispatch(actions.decrement());
  };

  return (
    <div>
      <h2>Home</h2>
      <p>The count is: {count || 'loading…'}</p>
      <button onClick={onIncrement}>+ 1</button>
      <button onClick={onDecrement}>- 1</button>
    </div>
  );
};

export default Home;
