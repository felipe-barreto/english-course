import { useEffect } from "react";
import styles from "./Modal.module.css";
import { motion } from "framer-motion";

type ModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const Modal = ({ isModalOpen, closeModal }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <motion.div
      className={styles.backdrop}
      onClick={closeModal}
      initial={{ backgroundColor: "#0000" }}
      animate={{ backgroundColor: "#0008" }}
      exit={{ backgroundColor: "#0000" }}
      transition={{ duration: 0.3 }}>
      <motion.div
        role="dialog"
        aria-modal="true"
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.3 }}>
        <h2 className={styles.title}>¡Gracias por tu interés!</h2>
        <p className={styles.paragraph}>
          Esta aplicación es un proyecto personal de portafolio. No es una compra real.
        </p>
        <button type="button" className={styles.button} onClick={closeModal}>
          Cerrar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
