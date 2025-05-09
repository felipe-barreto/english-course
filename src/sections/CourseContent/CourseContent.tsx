import styles from "./CourseContent.module.css";

const CourseContent = () => {
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Qué vas a aprender en este curso?</h2>
        <p className={styles.paragraph}>
          En este curso vas a dominar <strong>las cuatro habilidades clave del inglés</strong>:
        </p>
        <p className={styles.paragraph}>
          <strong>Comprensión auditiva</strong>: ejercicios con audios reales y podcasts para que
          entiendas desde conversaciones cotidianas hasta presentaciones formales.
        </p>
        <p className={styles.paragraph}>
          <strong>Expresión oral</strong>: práctica guiada de pronunciación y entonación para que
          hables con seguridad en reuniones, viajes o entrevistas.
        </p>
        <p className={styles.paragraph}>
          <strong>Lectura</strong>: artículos, noticias y fragmentos de literatura adaptada a tu
          nivel, para ampliar tu vocabulario y familiarizarte con estructuras complejas.
        </p>
        <p className={styles.paragraph}>
          <strong>Escritura</strong>: redacción de emails, informes y textos creativos, con
          correcciones personalizadas para pulir tu gramática y estilo.
        </p>
        <p className={styles.paragraph}>
          Además, vas a aprender a utilizar herramientas digitales (diccionarios en línea, apps de
          vocabulario y plataformas de video), estrategias de inmersión y técnicas de autoestudio
          para que avances de forma autónoma y constante.
        </p>
      </div>
    </section>
  );
};

export default CourseContent;
