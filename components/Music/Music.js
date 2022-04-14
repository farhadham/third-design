import React, { useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import classes from "./Music.module.scss";
import { useState } from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Mymusic from "./Mymusic/Mymusic";

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
      <div className={classes.wrapper2}>
        <Home index={index} />
        <About index={index} />
        <Portfolio index={index} />
        <Mymusic index={index} />
      </div>
    </div>
  );
}

export default Music;
