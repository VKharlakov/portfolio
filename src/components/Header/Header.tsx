import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
}

export default Header;
