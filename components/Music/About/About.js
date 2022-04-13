import classes from "./About.module.scss";
import { motion, AnimatePresence } from "framer-motion";

function About(props) {
  return (
    <AnimatePresence>
      {props.index === 1 && (
        <motion.div
          key="about"
          className={classes.wrapper}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ transition: { duration: 1 } }}
        >
          <div className={classes.background}>
            <div className={classes.textWrapper}>
              <motion.div
                className={classes.textContainer}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <p>MUSIC COMPOSER & AUDIO ENGINEER</p>
                <h1>MY NAME IS FARAJI</h1>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default About;
