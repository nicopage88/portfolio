import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Main.module.css";
import { getImageUrl } from "../../utils";

export const Main = () => {
  const { t } = useTranslation("main");

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.description}>{t("description1")}</p>
        <p className={styles.description}>{t("description2")}</p>
        <p className={styles.description}>{t("description3")}</p>
        <a
          href="https://nicolabs.cl/cv/cv_nicolas_gonzalez_espa%C3%B1ol.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          {t("curriculumBtn")}
        </a>
      </div>
      <img
        src={getImageUrl("main/mainImage.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>

      <div className={styles.whatsapp}>
        <a
          href="https://wa.me/56986280148?text=Hola,%20quiero%20consultar%20por..."
          target="_blank"
        >
          <img
            src={getImageUrl("main/whatsapp.png")}
            alt="Hablar conmigo por Whatsapp"
            title="Hablar conmigo por Whatsapp"
          />
        </a>
      </div>
    </main>
  );
};
