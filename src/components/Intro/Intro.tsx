import styles from "./Intro.module.css";
import photo from "../../../public/photo.jpg";

import { motion, MotionValue } from "framer-motion";
import { useScrollSection } from "../../../lib/hooks";

interface IntroProps {
  scrollData: {
    x: MotionValue<string>;
  };
}

function Intro({ scrollData }: IntroProps) {
  const { ref } = useScrollSection("Home");

  return (
    <motion.section
      id="home"
      className={styles.intro}
      style={{ x: scrollData.x }}
      ref={ref}
    >
      <div className={styles.intro__container}>
        <div className={styles.intro__info}>
          <h1 className={styles.intro__greeting}>
            Hi, <br />I am Vitaly
          </h1>
          <p className={styles.intro__brief}>
            I graduated from a linguistic university in Moscow, then moved to
            Belgrade, Serbia, and started to study web development in
            JavaScript. I successfully completed my studies and got my diploma,
            and at the moment I am looking for a project where I can apply my
            acquired skills and knowledge. My focus is React, mainly.
          </p>
          <button className={styles.intro__button}>Download CV</button>
        </div>
        <img className={styles.intro__photo} src={photo.src} />
        <p className={styles.intro__scroll}>Scroll down to see more</p>
      </div>
    </motion.section>
  );
}

export default Intro;
