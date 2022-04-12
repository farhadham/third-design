import React from "react";
import Navigation from "./Navigation/Navigation";
import classes from "./Music.module.scss";

function Music(props) {
  return (
    <div>
      <Navigation isEntered={props.isEntered} />
      <div className={classes.backgroundHome}></div>
    </div>
  );
}

export default Music;
