import React from "react";
import styles from "./Post.module.scss"

const Post = ({ title, body }) => {
  return (
    <a className={styles.container} href="#post">
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.body}>{body}</h3>
    </a>
  )
}

export default Post