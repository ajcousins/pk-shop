import classes from "./MiniQuant.module.css";

const MiniQuant = () => {
  return (
    <div className={classes.wrapper}>
      <button className={classes.quantAdj}>-</button>
      <input className={classes.input} type='number' min='0' max='99' />
      <button className={classes.quantAdj}>+</button>
    </div>
  );
};
export default MiniQuant;
