import classes from "./Navigation.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Li from "./Li/Li";

function Navigation(props) {
  const [navItems, setNavItems] = useState([
    { id: 0, link: "MUSIC" },
    { id: 1, link: "CONTACT" },
    { id: 2, link: "HOME" },
    { id: 3, link: "ABOUT" },
    { id: 4, link: "PORTFOLIO" },
  ]);

  const [index, setIndex] = useState(0);

  const nextHandler = () => {
    setIndex(++index);
    if (index === 5) {
      setIndex(0);
    }
  };

  return (
    <div className={classes.wrapper}>
      <motion.div
        onClick={nextHandler}
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
              exit={{ opacity: 0 }}
            >
              <Li index={index} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Navigation;

// -60.4
