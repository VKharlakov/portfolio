import styles from "./Skills.module.css";
import { skills } from "../../../lib/data";
import { motion, MotionValue } from "framer-motion";
interface SkillsProps {
  scrollData: {
    x: MotionValue<string>;
    opacity: MotionValue<string>;
  };
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills({ scrollData }: SkillsProps) {
  return (
    <motion.section
      className={styles.skills}
      style={{ x: scrollData.x, opacity: scrollData.opacity }}
    >
      <ul className={styles.skills__list}>
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className={`${styles.skills__item} ${
              styles[`skills__item_type_${skill.size}`]
            }`}
            // framer-motion settings
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Skills;
