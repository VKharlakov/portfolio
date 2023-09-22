import styles from "./Navbar.module.css";
import { NavLink, navLinks } from "../../../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { useCurrentSectionContext } from "@/contexts/CurrentSectionContext";
import { useInView } from "react-intersection-observer";

function Navbar() {
  const { currentSection, setCurrentSection } = useCurrentSectionContext();

  function scrollToSection(link: NavLink) {
    const element = document.getElementById(`${link.hash.slice(1)}`);
    setCurrentSection(link.name);
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
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {navLinks.map((link, index) => (
          <li className={styles.navbar__item} key={index}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link);
              }}
              className={`${styles.navbar__link} ${
                currentSection === link.name
                  ? `${styles.navbar__link_active}`
                  : ""
              }`}
              href={link.hash}
            >
              {link.name}
            </Link>
            {currentSection === link.name && (
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
    </nav>
  );
}

export default Navbar;
