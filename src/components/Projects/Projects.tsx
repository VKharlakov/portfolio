import styles from "./Projects.module.css";
import Project from "../Project/Project";

import { projects } from "../../../lib/data";
import { useScrollSection, useTranslate } from "../../../lib/hooks";

function Projects() {
  const { ref } = useScrollSection("#projects", 0.5);

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.projects__title}>
        {useTranslate("projects.title")}
      </h2>
      <ul className={styles.projects__list} ref={ref}>
        {projects.map((project, index) => (
          <li className={styles.projects__item} key={index}>
            <Project projectData={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
