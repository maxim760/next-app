import React from 'react'
import Link from 'next/link'
import styles from "../styles/link.module.css"

export const A = ({href, children}) => {
  return (
    <Link href={href}>
      <a className={styles.link}>{children}</a>
    </Link>
  )
}
