import styles from "./Skills.module.css";

import { skills } from "../../../lib/data";
import { motion, MotionValue } from "framer-motion";
import { useScrollSection } from "../../../lib/hooks";
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
  const { ref } = useScrollSection("Навыки");

  return (
    <motion.section
      id="skills"
      className={styles.skills}
      style={{ x: scrollData.x }}
      ref={ref}
    >
      <motion.ul className={styles.skills__list}>
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
            viewport={{ once: true, amount: 1 }}
            custom={index}
          >
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export default Skills;
