import React, { useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import classes from "./Music.module.scss";
import { useState } from "react";

function Music(props) {
  const [index, setIndex] = useState(0);

  const nextHandler = () => {
    setIndex(++index);
    if (index === 5) {
      setIndex(0);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Navigation
        onClick={nextHandler}
        isEntered={props.isEntered}
        index={index}
      />
      <div className={classes.backgroundHome}></div>
      <div className={classes.backgroundAbout}></div>
      <div className={classes.backgroundContact}></div>
    </div>
  );
}

export default Music;
