import styles from "./Intro.module.css";

import photo from "../../../public/photo.jpg";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, MotionValue } from "framer-motion";
import { useCurrentSectionContext } from "@/contexts/CurrentSectionContext";

interface IntroProps {
  scrollData: {
    x: MotionValue<string>;
  };
}

function Intro({ scrollData }: IntroProps) {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const { setCurrentSection } = useCurrentSectionContext();

  useEffect(() => {
    if (inView) {
      console.log("Home section is in view");

      setCurrentSection("Home");
    }
  }, [inView]);

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
