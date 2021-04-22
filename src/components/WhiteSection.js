import classes from "./WhiteSection.module.css";

const WhiteSection = (props) => {
  return (
    <div className={classes.whiteSectionContainer}>
      <div className={classes.innerContainer}>{props.children}</div>
    </div>
  );
};
export default WhiteSection;
