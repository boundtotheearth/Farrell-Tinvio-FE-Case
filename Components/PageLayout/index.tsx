import React from "react";
import styles from "./PageLayout.module.scss"

const PageLayout: React.FC<Record<string, unknown>> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}

export default PageLayout