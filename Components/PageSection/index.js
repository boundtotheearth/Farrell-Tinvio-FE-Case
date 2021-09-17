import React from "react";
import HeroImage from "../HeroImage";
import styles from "./PageSection.module.css"

export default ({ children, image }) => {
  return (
    <div className={styles.section}>
      <HeroImage src={image} />
      <div className={styles.contents}>
        {children}
      </div>
    </div>
  )
}