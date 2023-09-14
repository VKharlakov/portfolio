import styles from "./Intro.module.css";
import Skills from "./Skills";

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__info}>
        <h1 className={styles.intro__greeting}>Hello, I am Vitaly</h1>
        <p className={styles.intro__brief}>
          I am a junior frontend web developer. I enjoy building sites & apps.
          My focus is React.
        </p>
      </div>
      <p className={styles.intro__scroll}>Scroll down to see more</p>
      <Skills />
    </section>
  );
}

export default Intro;
