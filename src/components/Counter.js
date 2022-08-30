import {useDispatch, useSelector} from "react-redux";

import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({type:"INCREMENT"});
  }

  const decrementHandler = () => {
    dispatch({type:"DECREMENT"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}> +1</button>
      <button onClick={decrementHandler}>-1</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
