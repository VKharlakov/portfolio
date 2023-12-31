import styles from "./HorizontalScrollComponents.module.css";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";

import { useRef } from "react";
import { useTransform, useScroll } from "framer-motion";

function HorizontalScrollComponents() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const skillsX = useTransform(scrollYProgress, [0, 0.7], ["0%", "-100%"]);
  const introX = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-100%"]);
  const skillsOpacity = useTransform(scrollYProgress, [0, 0.5], ["0", "1"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

  return (
    <div ref={targetRef} className={styles["horizontal-scroll-components"]}>
      <div className={styles["horizontal-scroll-components__container"]}>
        <Intro
          scrollData={{
            x: introX,
            imgScale: imgScale,
          }}
        />
        <Skills scrollData={{ x: skillsX, opacity: skillsOpacity }} />
      </div>
    </div>
  );
}

export default HorizontalScrollComponents;
