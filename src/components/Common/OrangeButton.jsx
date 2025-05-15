import React from "react";
import styles from "../Main/Main.module.css"; // Asegúrate de ajustar la ruta si es distinta

export const OrangeButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactBtn}
  >
    {children}
  </a>
);
