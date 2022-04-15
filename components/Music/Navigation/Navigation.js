import classes from "./Navigation.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Li from "./Li/Li";

function Navigation(props) {
  const [isWindows, setIsWindows] = useState(true);

  return (
    <div className={classes.wrapper}>
      <motion.div
        onClick={props.onClick}
        className={classes.nextButton}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        NEXT
      </motion.div>

      <motion.div className={classes.listWrapper}>
        <AnimatePresence>
          {props.isEntered && (
            <motion.div
              key="nav"
              className={classes.listContainer}
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, width: "0%" }}
            >
              <Li index={props.index} setIndex={props.setIndex} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Navigation;

// -60.4
