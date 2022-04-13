import classes from "./li.module.scss";
import { motion } from "framer-motion";

function Li(props) {
  const variants = {
    home: {
      y:
        props.index === 0
          ? 0
          : props.index === 1
          ? -60.4
          : props.index === 2
          ? -120.8
          : props.index === 3
          ? 120.8
          : props.index === 4
          ? 60.4
          : 0,
      opacity:
        props.index === 0
          ? 1
          : props.index === 1
          ? 0.66
          : props.index === 2
          ? 0.33
          : props.index === 3
          ? [0.33, 0, 0.33]
          : props.index === 4
          ? 0.66
          : 0,
      scale:
        props.index === 0
          ? 1
          : props.index === 1
          ? 1
          : props.index === 2
          ? 0.66
          : props.index === 3
          ? [0.66, 0.01, 0.66]
          : props.index === 4
          ? 1
          : 0,
    },
    contact: {
      y:
        props.index === 0
          ? 0
          : props.index === 1
          ? -60.4
          : props.index === 2
          ? 181.2
          : props.index === 3
          ? 120.8
          : props.index === 4
          ? 60.4
          : 0,
      opacity:
        props.index === 0
          ? 0.66
          : props.index === 1
          ? 0.33
          : props.index === 2
          ? [0.33, 0, 0.33]
          : props.index === 3
          ? 0.66
          : props.index === 4
          ? 1
          : 0,
      scale:
        props.index === 0
          ? 1
          : props.index === 1
          ? 0.66
          : props.index === 2
          ? [0.66, 0.01, 0.66]
          : props.index === 3
          ? 1
          : props.index === 4
          ? 1
          : 0,
    },
    music: {
      y:
        props.index === 0
          ? 0
          : props.index === 1
          ? 241.6
          : props.index === 2
          ? 181.2
          : props.index === 3
          ? 120.8
          : props.index === 4
          ? 60.4
          : 0,
      opacity:
        props.index === 0
          ? 0.33
          : props.index === 1
          ? [0.33, 0, 0.33]
          : props.index === 2
          ? 0.66
          : props.index === 3
          ? 1
          : props.index === 4
          ? 0.66
          : 0,
      scale:
        props.index === 0
          ? 0.66
          : props.index === 1
          ? [0.66, 0.01, 0.66]
          : props.index === 2
          ? 1
          : props.index === 3
          ? 1
          : props.index === 4
          ? 1
          : 0,
    },
    portfolio: {
      y:
        props.index === 0
          ? 0
          : props.index === 1
          ? -60.4
          : props.index === 2
          ? -120.8
          : props.index === 3
          ? -182.2
          : props.index === 4
          ? -241.6
          : 0,
      opacity:
        props.index === 0
          ? [0.33, 0, 0.33]
          : props.index === 1
          ? 0.66
          : props.index === 2
          ? 1
          : props.index === 3
          ? 0.66
          : props.index === 4
          ? 0.33
          : 0,
      scale:
        props.index === 0
          ? [0.66, 0, 0.66]
          : props.index === 1
          ? 1
          : props.index === 2
          ? 1
          : props.index === 3
          ? 1
          : props.index === 4
          ? 0.66
          : 0,
    },
    about: {
      y:
        props.index === 0
          ? 0
          : props.index === 1
          ? -60.4
          : props.index === 2
          ? -120.8
          : props.index === 3
          ? -182.2
          : props.index === 4
          ? 60.4
          : 0,
      opacity:
        props.index === 0
          ? 0.66
          : props.index === 1
          ? 1
          : props.index === 2
          ? 0.66
          : props.index === 3
          ? 0.33
          : props.index === 4
          ? [0.33, 0, 0.33]
          : 0,
      scale:
        props.index === 0
          ? 1
          : props.index === 1
          ? 1
          : props.index === 2
          ? 1
          : props.index === 3
          ? 0.66
          : props.index === 4
          ? [0.66, 0, 0.66]
          : 0,
    },
  };

  return (
    <div className={classes.wrapper}>
      <ul>
        <motion.li
          initial={{ opacity: 0, scale: 0.01 }}
          animate="music"
          variants={variants}
          transition={{ duration: 0.3 }}
          onClick={() => {
            props.setIndex(3);
          }}
        >
          MUSIC
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.01 }}
          animate="contact"
          variants={variants}
          transition={{ duration: 0.3 }}
          onClick={() => {
            props.setIndex(4);
          }}
        >
          CONTACT
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.01 }}
          animate="home"
          variants={variants}
          transition={{ duration: 0.3 }}
          onClick={() => {
            props.setIndex(0);
          }}
        >
          HOME
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.01 }}
          animate="about"
          variants={variants}
          transition={{ duration: 0.3 }}
          onClick={() => {
            props.setIndex(1);
          }}
        >
          ABOUT
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.01 }}
          animate="portfolio"
          variants={variants}
          transition={{ duration: 0.3 }}
          onClick={() => {
            props.setIndex(2);
          }}
        >
          PORTFOLIO
        </motion.li>
      </ul>
    </div>
  );
}

export default Li;
