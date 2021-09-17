import React from "react";
import styles from "./IconText.module.scss"

const IconText = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon}/>
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default IconText