import React, { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation";
import classes from "./Music.module.scss";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Mymusic from "./Mymusic/Mymusic";
import Contact from "./Contact/Contact";

function Music(props) {
  const [index, setIndex] = useState(0);
  const [mobile, setMobile] = useState(false);

  const nextHandler = () => {
    setIndex(++index);
    if (index === 5) {
      setIndex(0);
    }
  };
  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth <= 992) {
        setMobile(true);
      }
    }
  });

  return (
    <div className={classes.wrapper}>
      <Navigation
        onClick={nextHandler}
        isEntered={props.isEntered}
        index={index}
        setIndex={setIndex}
      />
      <div className={classes.wrapper2}>
        <Home index={index} mobile={mobile} />
        <About index={index} mobile={mobile} />
        <Portfolio index={index} mobile={mobile} />
        <Mymusic index={index} mobile={mobile} />
        <Contact index={index} mobile={mobile} />
      </div>
    </div>
  );
}

export default Music;
