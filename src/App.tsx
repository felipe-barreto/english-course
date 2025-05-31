import Hero from "./sections/Hero/Hero";
import CourseContent from "./sections/CourseContent/CourseContent";
import Reasons from "./sections/Reasons/Reasons";
import Faq from "./sections/Faq/Faq";
import styles from "./App.module.css";

const App = () => {
  return (
    <main className={styles.container}>
      <Hero />
      <CourseContent />
      <Reasons />
      <Faq />
    </main>
  );
};

export default App;
