import classes from "./MiniQuant.module.css";

const MiniQuant = (props) => {
  const onChangeHandler = (e) => {
    props.updateQty(e.target.value, props.id);
  };

  const incrementHandler = () => {
    props.incrementQty(props.id);
  };

  const decrementHandler = () => {
    props.decrementQty(props.id);
  };

  return (
    <div className={classes.wrapper}>
      <button className={classes.quantAdj} onClick={decrementHandler}>
        -
      </button>
      <input
        className={classes.input}
        type='number'
        min='0'
        max='99'
        value={props.qty}
        onChange={onChangeHandler}
      />
      <button className={classes.quantAdj} onClick={incrementHandler}>
        +
      </button>
    </div>
  );
};
export default MiniQuant;
