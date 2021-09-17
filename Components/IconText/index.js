import React from "react";
import styles from "./IconText.module.css"

export default ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon}/>
      <h2>{text}</h2>
    </div>
  )
}