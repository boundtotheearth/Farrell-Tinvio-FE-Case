import React from "react";
import HeroImage from "../HeroImage";
import styles from "./PageSection.module.scss"

const PageSection = ({ children, image }) => {
  return (
    <div className={styles.section}>
      <HeroImage src={image} href="/"/>
      <div className={styles.contents}>
        {children}
      </div>
    </div>
  )
}

export default PageSection