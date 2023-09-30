import styles from "./Intro.module.css";
import photo from "../../../public/photo.jpg";

import { useEffect, useState } from "react";
import { useTranslate } from "../../../lib/hooks";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
import { useScrollSection, useUserLanguageContext } from "../../../lib/hooks";

interface IntroProps {
  scrollData: {
    x: MotionValue<string>;
    imgScale: MotionValue<number>;
  };
}

function Intro({ scrollData }: IntroProps) {
  const { ref } = useScrollSection("#home");
  const userLanguage = useUserLanguageContext();

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
      y: 100,
      opacity: 0,
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.1 * index,
      },
    }),
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
            custom={1}
          >
            {useTranslate("intro.greeting_p1")}
            <br /> {useTranslate("intro.greeting_p2")}
          </motion.h1>
          <motion.p
            className={styles.intro__brief}
            variants={introAppearAnimationVariants}
            initial="initial"
            animate="animate"
            custom={2}
          >
            {useTranslate("intro.brief")}
          </motion.p>
          <motion.div
            className={styles.intro__buttons}
            variants={introAppearAnimationVariants}
            initial="initial"
            animate="animate"
            custom={3}
          >
            {userLanguage === "ru" ? (
              <motion.div className={styles["intro__button-container"]}>
                <a
                  className={styles.intro__button}
                  href="/Kharlakov_Vitaly_CV_rus.pdf"
                  download
                >
                  Скачать резюме
                </a>
              </motion.div>
            ) : (
              <motion.div
                className={styles["intro__button-container"]}
                variants={introAppearAnimationVariants}
                initial="initial"
                animate="animate"
              >
                <a
                  className={styles.intro__button}
                  href="/Kharlakov_Vitaly_CV_eng.pdf"
                  download
                >
                  Download CV
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
        <AnimatePresence>
          {isClient && isAtTop && (
            <motion.div
              className={styles["intro__photo-container"]}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                ease: [0, 0.71, 0.2, 1],
                scale: {
                  type: "spring",
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
          custom={4}
        >
          {useTranslate("intro.scroll")}
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Intro;
