import classes from "./Contact.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Contact(props) {
  const [onButton, setOnButton] = useState(false);

  return (
    <AnimatePresence>
      {(props.index === 4 || props.mobile) && (
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
                <h2>CONTACT</h2>
                <div className={classes.data}>
                  <h4>EMAIL:</h4>
                  <p>farhadham2@gmail.com</p>
                  <h4>PHONE:</h4>
                  <p>{`+90 (543) 455 2160`}</p>
                </div>
                <div className={classes.formWrapper}>
                  <form
                    action="https://formsubmit.co/farhadham2@gmail.com"
                    method="POST"
                  >
                    <div className={classes.nameEmail}>
                      <input
                        className={classes.name}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                      <input
                        className={classes.email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                      name="text"
                      required
                    ></textarea>
                    <button
                      type="submit"
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
                        animate={
                          onButton ? { width: "300px" } : { width: "1px" }
                        }
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                      <motion.div
                        className={classes.front}
                        animate={
                          onButton ? { color: "#000000" } : { color: "#ffffff" }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        SEND
                      </motion.div>
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Contact;
