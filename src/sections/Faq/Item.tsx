import styles from "./Item.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import downArrow from "../../assets/down-arrow.svg";
import upArrow from "../../assets/up-arrow.svg";

type ItemProps = {
  question: string;
  answer: string;
};

const Item = ({ question, answer }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container} onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
        <h3 className={styles.question}>{question}</h3>
        <span>
          {isOpen ? (
            <img src={upArrow} alt="Flecha para arriba" className={styles.icon} />
          ) : (
            <img src={downArrow} alt="Flecha para abajo" className={styles.icon} />
          )}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}>
            <p className={styles.answer}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Item;
