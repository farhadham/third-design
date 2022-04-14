import classes from "./About.module.scss";
import { motion, AnimatePresence } from "framer-motion";

function About(props) {
  return (
    <AnimatePresence>
      {props.index === 1 && (
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
                <h2>ABOUT ME</h2>
                <div className={classes.aboutContainer}>
                  <p>
                    After graduating from university with a bachelor's degree in
                    civil engineering, I started following my hobby and
                    improving my music theory knowledge. I finally started using
                    my first DAW FL Studio with my piano skills.
                  </p>
                  {/* <div className={classes.myImage}></div> */}
                  <p>
                    in 2018 I started producing music for local artists, and in
                    2019, I joined Fiverr as a freelancer; since then, I've been
                    working as a Film Composer, Music Producer, and audio
                    engineer and completed more than 180 various projects for
                    different companies and indie projects
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default About;
