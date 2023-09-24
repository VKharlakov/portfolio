import styles from "./Intro.module.css";
import photo from "../../../public/photo.jpg";

import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCurrentSectionContext, useScrollSection } from "../../../lib/hooks";
import { useRef, useEffect, useState } from "react";

interface IntroProps {
  scrollData: {
    x: MotionValue<string>;
    imgScale: MotionValue<number>;
  };
}

function Intro({ scrollData }: IntroProps) {
  const { ref } = useScrollSection("Home");

  const [isClient, setIsClient] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const checkScrollPosition = () => {
    setIsAtTop(window.scrollY < 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const introAppearAnimationVariants = {
    initial: {
      x: "-50px",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <motion.section
      id="home"
      className={styles.intro}
      ref={ref}
      style={{ x: scrollData.x }}
    >
      <div className={styles.intro__container}>
        <div className={styles.intro__info}>
          <motion.h1
            className={styles.intro__greeting}
            variants={introAppearAnimationVariants}
            initial="initial"
            animate="animate"
          >
            Hi, <br />I am Vitaly
          </motion.h1>
          <motion.p
            className={styles.intro__brief}
            variants={introAppearAnimationVariants}
            initial="initial"
            animate="animate"
          >
            I graduated from a linguistic university in Moscow, then moved to
            Belgrade, Serbia, and started to study web development in
            JavaScript. I successfully completed my studies and got my diploma,
            and at the moment I am looking for a project where I can apply my
            acquired skills and knowledge. My focus is React, mainly.
          </motion.p>
          <motion.div
            className={styles.intro__buttons}
            variants={introAppearAnimationVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className={styles["intro__button-container"]}
              variants={introAppearAnimationVariants}
              initial="initial"
              animate="animate"
            >
              <button
                className={styles.intro__button}
              >{`Download CV (ru)`}</button>
            </motion.div>
            <motion.div
              className={styles["intro__button-container"]}
              variants={introAppearAnimationVariants}
              initial="initial"
              animate="animate"
            >
              <button
                className={styles.intro__button}
              >{`Download CV (eng)`}</button>
            </motion.div>
          </motion.div>
        </div>
        <AnimatePresence>
          {isClient && isAtTop && (
            <motion.div
              className={styles["intro__photo-container"]}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.2,
                ease: [0, 0.71, 0.2, 1],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 200,
                },
              }}
            >
              <img className={styles.intro__photo} src={photo.src} />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.p
          className={styles.intro__scroll}
          variants={introAppearAnimationVariants}
          initial="initial"
          animate="animate"
        >
          Scroll down to see more
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Intro;
