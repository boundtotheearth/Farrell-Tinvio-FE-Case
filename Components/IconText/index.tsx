import React from "react";
import styles from "./IconText.module.scss"

interface Props {
  icon: string,
  text: string
}

const IconText: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon}/>
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default IconText