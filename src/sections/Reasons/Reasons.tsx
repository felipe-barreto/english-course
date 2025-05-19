import styles from "./Reasons.module.css";
import reason1 from "../../assets/reason1.png";
import reason2 from "../../assets/reason2.png";
import reason3 from "../../assets/reason3.png";
import reason4 from "../../assets/reason4.png";
import reason5 from "../../assets/reason5.png";
import reason6 from "../../assets/reason6.png";

const Reasons = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>6 motivos por los que este curso marca la diferencia</h2>
      <div className={styles.reasons}>
        <div className={styles.reason}>
          <img src={reason1} alt="Perfil de usuario con ajustes" className={styles.image} />
          <h3 className={styles.subtitle}>Clases 100% personalizadas</h3>
          <p className={styles.paragraph}>
            Cada unidad adapta el ritmo y los contenidos a tus necesidades.
          </p>
        </div>
        <div className={styles.reason}>
          <img src={reason2} alt="Dos personas hablando" className={styles.image} />
          <h3 className={styles.subtitle}>Enfoque comunicativo real</h3>
          <p className={styles.paragraph}>
            Prácticas desde el primer día con situaciones reales (viajes, trabajo, ocio).
          </p>
        </div>
        <div className={styles.reason}>
          <img
            src={reason3}
            alt="Alumno levantando la mano frente a la computadora, que tiene a su profesor en la pantalla"
            className={styles.image}
          />
          <h3 className={styles.subtitle}>Profesores nativos y bilingües</h3>
          <p className={styles.paragraph}>
            Feedback preciso de hablantes profesionales y coaching de pronunciación.
          </p>
        </div>
        <div className={styles.reason}>
          <img src={reason4} alt="T___e" className={styles.image} />
          <h3 className={styles.subtitle}>Metodología práctica y gamificada</h3>
          <p className={styles.paragraph}>
            Retos, quizzes y microlecciones que mantienen la motivación.
          </p>
        </div>
        <div className={styles.reason}>
          <img src={reason5} alt="Una pantalla con muchos videos" className={styles.image} />
          <h3 className={styles.subtitle}>Acceso ilimitado a recursos</h3>
          <p className={styles.paragraph}>
            Biblioteca de videos, ejercicios interactivos y foros de consulta 24/7.
          </p>
        </div>
        <div className={styles.reason}>
          <img src={reason6} alt="Certificado" className={styles.image} />
          <h3 className={styles.subtitle}>Certificado oficial al completar</h3>
          <p className={styles.paragraph}>Avala tu nivel ante empleadores y universidades.</p>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
