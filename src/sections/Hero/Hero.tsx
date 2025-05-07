import { useState } from "react";
import Modal from "./Modal";
import styles from "./Hero.module.css";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>
          Aprendé inglés con <span className={styles.letter}>E</span>a
          <span className={styles.letter}>s</span>y <span className={styles.letter}>E</span>n
          <span className={styles.letter}>g</span>l<span className={styles.letter}>i</span>s
          <span className={styles.letter}>h</span>
        </h1>
        <p className={styles.paragraph}>
          Aprender inglés hoy en día es una de las decisiones más inteligentes que podés tomar: no
          solo abre puertas en el mundo laboral y te da acceso a mejores oportunidades de empleo,
          sino que también te permite viajar con más libertad, disfrutar de películas, series y
          libros en su idioma original, y comunicarte con personas de todo el mundo. Este curso está
          pensado para que aprendas a tu ritmo, desde casa, con explicaciones claras y prácticas
          reales para que empieces a hablar desde el primer día. ¡Es el momento ideal para invertir
          en vos y en tu futuro!
        </p>
        <button type="button" className={styles.button} onClick={() => setIsModalOpen(true)}>
          Comprar
        </button>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
