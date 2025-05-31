import styles from "./Faq.module.css";
import Item from "./Item";
import { faqData } from "./data";

const Faq = () => {
  return (
    <section className={styles.background}>
      <h2 className={styles.title}>Preguntas frecuentes</h2>
      <div className={styles.container}>
        {faqData.map((item) => (
          <Item question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
