import React, { useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import classes from "./Music.module.scss";
import { useState } from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

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
        setIndex={setIndex}
      />
      <Home index={index} />
      <About index={index} />
      <Portfolio index={index} />
    </div>
  );
}

export default Music;
