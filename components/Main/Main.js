import Navigation from "../Music/Navigation/Navigation";
import classes from "./Main.module.scss";
import { useState } from "react";
import Music from "../Music/Music";

function Main(props) {
  const [isEntered, setIsEntered] = useState(true);

  return (
    <div className={classes.wrapper}>
      <Music isEntered={isEntered} />
    </div>
  );
}

export default Main;
