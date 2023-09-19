import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <section className={styles.contacts}>
      <h2 className={styles.contacts__title}>Contacts</h2>
      <ul className={styles.contacts__list}>
        <li
          className={`${styles.contacts__contact} ${styles["contacts__contact_type_main"]}`}
        >
          <button className={styles.contacts__button}></button>
        </li>
        <li
          className={`${styles.contacts__contact} ${styles["contacts__contact_type_small"]}`}
        >
          <a className={styles.contacts__link}></a>
        </li>
        <li
          className={`${styles.contacts__contact} ${styles["contacts__contact_type_small"]}`}
        >
          <a className={styles.contacts__link}></a>
        </li>
        <li
          className={`${styles.contacts__contact} ${styles["contacts__contact_type_small"]}`}
        >
          <a className={styles.contacts__link}></a>
        </li>
        <li
          className={`${styles.contacts__contact} ${styles["contacts__contact_type_small"]}`}
        >
          <a className={styles.contacts__link}></a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
