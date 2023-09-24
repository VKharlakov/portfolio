import styles from "./Footer.module.css";
import Contacts from "../Contacts/Contacts";
import { motion } from "framer-motion";

function Footer() {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <Contacts />
      <motion.p
        className={styles.footer__signature}
        initial={{ opacity: 0, y: "100" }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
      >
        VKharlakov {date.getFullYear()}
      </motion.p>
    </footer>
  );
}

export default Footer;
