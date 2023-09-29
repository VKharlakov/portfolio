import styles from "./Navbar.module.css";
import Link from "next/link";

import { motion } from "framer-motion";
import { navLinks } from "../../../lib/data";
import type { NavLink } from "../../../lib/types";
import {
  useCurrentSectionContext,
  useUserLanguageContext,
} from "../../../lib/hooks";

function Navbar() {
  const { currentSection, setCurrentSection, setWhenLastClick } =
    useCurrentSectionContext();
  const userLanguage = useUserLanguageContext();
  console.log(userLanguage);

  function scrollToSection(link: NavLink) {
    const element = document.getElementById(`${link.hash.slice(1)}`);
    setCurrentSection(link.hash);

    setWhenLastClick(Date.now());
    if (!element) {
      return;
    }

    if (
      link.scrollMethod === "manual" &&
      link.scrollToMultiplier !== undefined
    ) {
      window.scrollTo({
        top: window.outerHeight * link.scrollToMultiplier,
      });
    } else {
      element.scrollIntoView({ block: "start" });
    }
  }

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ top: "-100px", opacity: 0.5 }}
      animate={{ top: "20px", opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <ul className={styles.navbar__list}>
        {navLinks.map((link, index) => (
          <li className={styles.navbar__item} key={index}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link);
              }}
              className={`${styles.navbar__link} ${
                currentSection === link.hash
                  ? `${styles.navbar__link_active}`
                  : ""
              }`}
              href={link.hash}
            >
              {userLanguage === "ru" ? `${link.nameRu}` : `${link.nameEng}`}
            </Link>
            {currentSection === link.hash && (
              <motion.span
                layoutId="currentSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 40,
                }}
                className={styles["navbar__link-background"]}
              />
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
