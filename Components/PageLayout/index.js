import React from "react";
import styles from "./PageLayout.module.css"

export default ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}