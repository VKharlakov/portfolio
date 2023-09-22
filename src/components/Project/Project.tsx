import { projects } from "../../../lib/data";
import styles from "./Project.module.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
interface ProjectProps {
  projectData: (typeof projects)[number];
}

function Project({ projectData }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className={styles["project-wrapper"]}
      ref={ref}
      style={{
        scale: scale,
        opacity: opacity,
      }}
    >
      <section className={styles.project}>
        <h3 className={styles.project__name}>{projectData.name}</h3>
        <p className={styles.project__description}>{projectData.description}</p>
        <ul className={styles.project__stack}>
          {projectData.stack.map((item, index) => (
            <li className={styles[`project__stack-item`]} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className={styles[`project__link-container`]}>
          <img
            className={styles.project__logo}
            src={projectData.icon?.src}
            alt={`${projectData.name} logo`}
          />
          <a
            className={`${styles.project__link} ${styles.project__link_type_web}`}
            href={projectData.link}
            target="_blank"
            rel="noreferrer"
          />
          <a
            className={`${styles.project__link} ${styles.project__link_type_repo}`}
            href={projectData.repoLink}
            target="_blank"
            rel="noreferrer"
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
