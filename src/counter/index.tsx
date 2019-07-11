import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '../store/actions';
import { AppState } from '../store/state';

const Counter: React.FC = () => {
  const value = useSelector((state: AppState) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = (v: number) => () => dispatch(Actions.increment(v));
  const handleDecrement = (v: number) => () => dispatch(Actions.decrement(v));
  const handleIncrementIfOdd = (v: number) => () => dispatch(Actions.incrementIfOdd(v));
  const handleIncrementAsync = (v: number) => () => dispatch(Actions.incrementAsync.started(v));

  return (
    <div>
      <p>
        Clicked: {value} times.
      </p>
      <button onClick={handleIncrement(1)}>+</button>
      <button onClick={handleDecrement(1)}>-</button>
      <button onClick={handleIncrementIfOdd(1)}>increment if odd</button>
      <button onClick={handleIncrementAsync(1)}>increment async</button>
    </div>
  );
};

export default Counter;
