import React from "react";
import styles from "./Post.module.css"

export default ({ title, body }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.body}>{body}</h3>
    </div>
  )
}