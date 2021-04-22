import { Parallax } from "react-parallax";
import classes from "./ColourSection.module.css";
import { Link } from "react-router-dom";

const ColourSection = (props) => {
  let alignClass = classes.leftContainer;
  if (props.align === "right") alignClass = classes.rightContainer;

  const clickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Parallax bgImage={props.background} strength={props.parallaxStrength}>
      <div className={classes.backgroundContainer}>
        <div className={alignClass}>
          <h1 className={classes.heroHeader}>{props.heading}</h1>
          <p>{props.textA}</p>
          <p>{props.textB}</p>
          <img src={props.heatScale} alt='Heat scale' />
          <Link to='/shop' className={classes.link}>
            <h2 className={classes.actionCall} onClick={clickHandler}>
              Shop Now!
            </h2>
          </Link>
        </div>
      </div>
    </Parallax>
  );
};
export default ColourSection;
