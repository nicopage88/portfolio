import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t("title")}</h2>
        <p>{t("text")}</p>
      </div>
      <ul className={styles.links}>
        <a
          href="mailto:nicopage88@outlook.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <span>nicopage88@outlook.es</span>
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/nicolabs88/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedlnIcon.png")}
              alt="Linkedln icon"
            />
            <span>Nicolás González A.</span>
          </li>
        </a>
        <a
          href="https://github.com/nicopage88"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <span>nicopage88</span>
          </li>
        </a>
      </ul>
    </footer>
  );
};
