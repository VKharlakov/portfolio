import styles from "./Intro.module.css";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

function Intro() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section className={styles.intro} ref={targetRef}>
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
        <p className={styles.intro__scroll}>Scroll down to see more</p>
      </div>
    </section>
  );
}

export default Intro;
