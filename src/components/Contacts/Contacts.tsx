import styles from "./Contacts.module.css";

import { links } from "../../../lib/data";
import { motion } from "framer-motion";
import { useScrollSection } from "../../../lib/hooks";

const fadeInAnimationVariantsVertical = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

function Contacts() {
  const { ref } = useScrollSection("Contacts");

  return (
    <section className={styles.contacts} id="contacts" ref={ref}>
      <motion.h2
        className={styles.contacts__title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
        viewport={{ once: true }}
      >
        Let's connect!
      </motion.h2>
      <ul className={styles.contacts__list}>
        {/* <li
          className={`${styles.contacts__contact} ${styles.contacts__contact_type_main}`}
        >
          <button className={styles.contacts__button} />
        </li> */}
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariantsVertical}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring" }}
            custom={index}
            viewport={{ once: true }}
          >
            <motion.li
              className={`${styles.contacts__contact} ${
                styles[`contacts__contact_type_${link.name}`]
              }`}
            >
              <a
                className={styles.contacts__link}
                href={link.link}
                target="_blank"
                rel="noreferrer"
              />
            </motion.li>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
