import styles from "./Projects.module.css";

import { useEffect } from "react";
import { projects } from "../../../lib/data";
import { useInView } from "react-intersection-observer";
import { useCurrentSectionContext } from "@/contexts/CurrentSectionContext";

function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { setCurrentSection } = useCurrentSectionContext();

  useEffect(() => {
    if (inView) {
      console.log("Projects section is in view");
      setCurrentSection("Projects");
    }
  }, [inView]);

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <h2 className={styles.projects__title}>Projects</h2>
      <ul className={styles.projects__list}>
        {projects.map((project, index) => (
          <li className={styles.projects__project} key={index}>
            <h3 className={styles.projects__name}>{project.name}</h3>
            <p className={styles.projects__description}>
              {project.description}
            </p>
            <ul className={styles.projects__stack}>
              {project.stack.map((item, index) => (
                <li className={styles[`projects__stack-item`]} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles[`projects__link-container`]}>
              <img
                className={styles.projects__logo}
                src={project.icon?.src}
                alt={`${project.name} logo`}
              />
              <a
                className={`${styles.projects__link} ${styles.projects__link_type_web}`}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              />
              <a
                className={`${styles.projects__link} ${styles.projects__link_type_repo}`}
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
