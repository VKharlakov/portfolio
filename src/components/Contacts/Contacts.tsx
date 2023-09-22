import styles from "./Contacts.module.css";

import { useEffect } from "react";
import { links } from "../../../lib/data";
import { useInView } from "react-intersection-observer";
import { useCurrentSectionContext } from "@/contexts/CurrentSectionContext";

function Contacts() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const { setCurrentSection } = useCurrentSectionContext();

  useEffect(() => {
    if (inView) {
      console.log("Contacts section is in view");
      setCurrentSection("Contacts");
    }
  }, [inView]);

  return (
    <section className={styles.contacts} id="contacts" ref={ref}>
      <h2 className={styles.contacts__title}>Contacts</h2>
      <ul className={styles.contacts__list}>
        <li
          className={`${styles.contacts__contact} ${styles["contacts__contact_type_main"]}`}
        >
          <button className={styles.contacts__button} />
        </li>
        {links.map((link, index) => (
          <li
            className={`${styles.contacts__contact} ${styles["contacts__contact_type_small"]}`}
            key={index}
          >
            <a
              className={styles.contacts__link}
              href={link.link}
              target="_blank"
              rel="noreferrer"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
