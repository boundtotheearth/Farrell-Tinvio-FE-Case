import React from "react";
import styles from "./HeroImage.module.css"

const HeroImage = ({ src, href }) => {
  return (
    <a href={href}>
      <img className={styles.hero} src={src}/>
    </a>
  )
}

export default HeroImage