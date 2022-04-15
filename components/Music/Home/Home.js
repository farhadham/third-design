import classes from "./Home.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Home(props) {
  const [onButton, setOnButton] = useState(false);

  return (
    <AnimatePresence>
      {(props.index === 0 || props.mobile) && (
        <motion.div
          className={classes.wrapper}
          initial={{ x: "100vw" }}
          animate={{ x: "0vw" }}
          transition={{ duration: 0.5 }}
          exit={{ x: "-100vw" }}
        >
          <div className={classes.background}>
            <div className={classes.textWrapper}>
              <motion.div
                className={classes.textContainer}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 70 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h2>MUSIC COMPOSER & AUDIO ENGINEER</h2>
                <h1>MY NAME IS FARHAD FARAJI</h1>
                <a
                  href="https://www.linkedin.com/in/farhadfaraji/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={classes.button}
                    onMouseOver={() => {
                      setOnButton(true);
                    }}
                    onMouseLeave={() => {
                      setOnButton(false);
                    }}
                  >
                    <motion.div
                      className={classes.back}
                      animate={onButton ? { width: "200px" } : { width: "1px" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <motion.div
                      className={classes.front}
                      animate={
                        onButton ? { color: "black" } : { color: "white" }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      LINKEDIN
                    </motion.div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Home;
