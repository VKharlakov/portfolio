import styles from "./Projects.module.css";
import Project from "../Project/Project";

import { projects } from "../../../lib/data";
import { useScrollSection } from "../../../lib/hooks";

function Projects() {
  const { ref } = useScrollSection("Projects", 0.2);

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <h2 className={styles.projects__title}>Projects</h2>
      <ul className={styles.projects__list}>
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
