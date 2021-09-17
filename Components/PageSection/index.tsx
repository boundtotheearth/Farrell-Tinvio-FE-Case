import React from "react";
import HeroImage from "../HeroImage";
import styles from "./PageSection.module.scss"

interface Props {
  children: React.ReactNode,
  image: string
}

const PageSection: React.FC<Props> = ({ children, image }) => {
  return (
    <div className={styles.section}>
      <HeroImage src={image} href="/"/>
      <div className={styles.contents}>
        {children}
      </div>
    </div>
  )
}

export default PageSection