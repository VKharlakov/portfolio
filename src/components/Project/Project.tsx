import { projects } from "../../../lib/data";
import styles from "./Project.module.css";

interface ProjectProps {
  projectData: (typeof projects)[number];
}

function Project({ projectData }: ProjectProps) {
  return (
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
  );
}

export default Project;
