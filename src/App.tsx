import Hero from "./sections/Hero/Hero";
import CourseContent from "./sections/CourseContent/CourseContent";
import styles from "./App.module.css";

const App = () => {
  return (
    <main className={styles.container}>
      <Hero />
      <CourseContent />
    </main>
  );
};

export default App;
