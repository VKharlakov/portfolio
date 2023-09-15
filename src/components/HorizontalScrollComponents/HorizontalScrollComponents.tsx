import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import styles from "./HorizontalScrollComponents.module.css";
import { useRef } from "react";
import { useTransform, useScroll } from "framer-motion";

function HorizontalScrollComponents() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const skillsOpacity = useTransform(scrollYProgress, [0, 0.5], ["0.1", "1"]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.5], ["1", "0"]);
  return (
    <div ref={targetRef} className={styles["horizontal-scroll-components"]}>
      <div className={styles["horizontal-scroll-components__container"]}>
        <Intro scrollData={{ opacity: introOpacity }} />
        <Skills scrollData={{ x: x, opacity: skillsOpacity }} />
      </div>
    </div>
  );
}

export default HorizontalScrollComponents;
