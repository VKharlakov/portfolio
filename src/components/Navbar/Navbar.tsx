import styles from "./Navbar.module.css";
import { links } from "../../../lib/data";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {links.map((link) => (
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} href={link.hash}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
