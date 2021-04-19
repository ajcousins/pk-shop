import { Parallax } from "react-parallax";
import classes from "./ColourSection.module.css";

const ColourSection = (props) => {
  let alignClass = classes.leftContainer;
  if (props.align === "right") alignClass = classes.rightContainer;

  return (
    <Parallax bgImage={props.background} strength={props.parallaxStrength}>
      <div className={classes.backgroundContainer}>
        <div className={alignClass}>
          <h1 className={classes.heroHeader}>{props.heading}</h1>
          <p>{props.textA}</p>
          <p>{props.textB}</p>
          <img src={props.heatScale} />
          <h2 className={classes.actionCall}>Shop Now!</h2>
        </div>
      </div>
    </Parallax>
  );
};
export default ColourSection;
