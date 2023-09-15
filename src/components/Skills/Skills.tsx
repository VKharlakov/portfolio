import styles from "./Skills.module.css";
import { skills } from "../../../lib/data";
import { motion, MotionValue } from "framer-motion";
interface SkillsProps {
  scrollData: {
    x: MotionValue<string>;
    opacity: MotionValue<string>;
  };
}

function Skills({ scrollData }: SkillsProps) {
  return (
    <motion.section
      className={styles.skills}
      style={{ x: scrollData.x, opacity: scrollData.opacity }}
    >
      <ul className={styles.skills__list}>
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`${styles.skills__item} ${
              styles[`skills__item_type_${skill.size}`]
            }`}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Skills;
