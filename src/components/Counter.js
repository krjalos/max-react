import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/index";
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.show)
  const dispatch = useDispatch();

  const incrementHandler = (event, value = 1) => {
    dispatch(counterActions.increment(value));
  }

  const decrementHandler = (event, value = 1) => {
    dispatch(counterActions.decrement(value));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : null}
      <button onClick={incrementHandler}> +1</button>
      <button onClick={() => {incrementHandler(this, 5)}}> +5</button>
      <button onClick={decrementHandler}>-1</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
