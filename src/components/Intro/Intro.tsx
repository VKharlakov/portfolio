import styles from "./Intro.module.css";
import photo from "../../../public/photo.jpg";

import { AnimatePresence, motion, MotionValue } from "framer-motion";
import { useScrollSection, useUserLanguageContext } from "../../../lib/hooks";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

interface IntroProps {
  scrollData: {
    x: MotionValue<string>;
    imgScale: MotionValue<number>;
  };
}

function Intro({ scrollData }: IntroProps) {
  const { ref } = useScrollSection("#home");
  const { t } = useTranslation("intro");
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
            Привет, <br />я - Виталий!
          </motion.h1>
          <motion.p
            className={styles.intro__brief}
            variants={introAppearAnimationVariants}
            initial="initial"
            animate="animate"
            custom={2}
          >
            Закончил лингвистический университет в Москве, затем переехал в
            Сербию, Белград и взялся за изучение Веб-разработки на JavaScript.
            Обучение успешно завершил, получил диплом, и на данный момент ищу
            проект, где смогу применить приобретенные навыки и знания. Уделяю
            особое внимание проектам на React.
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
          Начни скроллить вниз, чтобы увидеть больше
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Intro;
