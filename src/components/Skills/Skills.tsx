import styles from "./Skills.module.css";
import { skills } from "../../../lib/data";

function Skills() {
  return (
    <section className={styles.skills}>
      <ul className={styles.skills__list}>
        {skills.map((skill) => (
          <li
            className={`${styles.skills__item} ${
              styles[`skills__item_type_${skill.size}`]
            }`}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
