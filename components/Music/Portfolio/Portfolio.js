import classes from "./Portfolio.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

function Portfolio(props) {
  return (
    <AnimatePresence>
      {(props.index === 2 || props.mobile) && (
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
                <h1>LATEST PROJECTS</h1>
                <div className={classes.projectsWrapper}>
                  <a
                    href="https://www.facebook.com/nhlstenden/videos/475244907279750"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={classes.project}>
                      <h3>NHL Stenden</h3>
                      <p>Short Film</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/p/CW_P0o0KwTN/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={classes.project}>
                      <h3>Eventopeople</h3>
                      <p>Trailer Music</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/p/CWk5tF6oJZv/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={classes.project}>
                      <h3>Rowing Club Bern</h3>
                      <p>Short Film</p>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=GqBwmTAkXlQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={classes.project}>
                      <h3>CAVEWORLD Game</h3>
                      <p>Trailer Music</p>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=-Fn7go2mnSE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={classes.project}>
                      <h3>Airmango Project</h3>
                      <p>Trailer Music</p>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=_wHuTdgQmcU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={classes.project}>
                      <h3>Idle Farmyard</h3>
                      <p>Videogame Music</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Portfolio;
