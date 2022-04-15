import classes from "./Mymusic.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Mymusic(props) {
  const [onButton, setOnButton] = useState(false);
  return (
    <AnimatePresence>
      {(props.index === 3 || props.mobile) && (
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
                <h2>MUSIC</h2>
                <div className={classes.musicContainer}>
                  <iframe
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118680582&color=%23ba5669&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>
                  <iframe
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074128704&color=%23ba5669&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>
                  <iframe
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1250032426&color=%23ba5669&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>
                </div>
                <a
                  href="https://soundcloud.com/farhadham"
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
                      animate={onButton ? { width: "300px" } : { width: "1px" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <motion.div
                      className={classes.front}
                      animate={
                        onButton ? { color: "#ffffff" } : { color: "#080403" }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      SOUNDCLOUD
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

export default Mymusic;
