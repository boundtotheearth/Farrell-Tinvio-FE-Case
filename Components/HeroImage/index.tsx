import React from "react";
import styles from "./HeroImage.module.css"

interface Props {
  src?: string,
  href?: string
}

const HeroImage: React.FC<Props> = ({ src, href }) => {
  return (
    <a href={href}>
      <img className={styles.hero} src={src}/>
    </a>
  )
}

export default HeroImage