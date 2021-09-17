import React from "react";
import styles from "./HeroImage.module.css"

export default ({ src }) => {
  return (
    <img className={styles.hero} src={src}/>
  )
}