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
    offset: ["0 1", "1 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className={styles["project-wrapper"]}
      ref={ref}
      style={{
        scale: scale,
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
        <img
          className={styles.project__logo}
          src={projectData.icon?.src}
          alt={`${projectData.name} logo`}
        />
        <div className={styles[`project__link-container`]}>
          {projectData.link && (
            <a
              className={`${styles.project__link} ${styles.project__link_type_web}`}
              href={projectData.link}
              target="_blank"
              rel="noreferrer"
            />
          )}
          {projectData.repoLink && (
            <a
              className={`${styles.project__link} ${styles.project__link_type_repo}`}
              href={projectData.repoLink}
              target="_blank"
              rel="noreferrer"
            />
          )}
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
