import styles from "./Reasons.module.css";
import { reasonsData } from "./data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

type ReasonCardProps = {
  reason: { img: string; alt: string; title: string; text: string };
  index: number;
};

const ReasonCard = ({ reason, index }: ReasonCardProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      className={styles.reason}
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}>
      <img src={reason.img} alt={reason.alt} className={styles.image} />
      <h3 className={styles.subtitle}>{reason.title}</h3>
      <p className={styles.paragraph}>{reason.text}</p>
    </motion.div>
  );
};

const Reasons = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>6 motivos por los que este curso marca la diferencia</h2>
      <div className={styles.reasons}>
        {reasonsData.map((reason, index) => (
          <ReasonCard reason={reason} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Reasons;
