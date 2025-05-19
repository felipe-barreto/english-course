import Hero from "./sections/Hero/Hero";
import CourseContent from "./sections/CourseContent/CourseContent";
import Reasons from "./sections/Reasons/Reasons";
import styles from "./App.module.css";

const App = () => {
  return (
    <main className={styles.container}>
      <Hero />
      <CourseContent />
      <Reasons />
    </main>
  );
};

export default App;
