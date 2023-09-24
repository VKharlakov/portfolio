import styles from "./Footer.module.css";
import Contacts from "../Contacts/Contacts";

function Footer() {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <Contacts />
      <p className={styles.footer__signature}>
        VKharlakov {date.getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
