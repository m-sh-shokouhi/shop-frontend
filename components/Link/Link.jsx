import styles from './Link.module.css'
import React from 'react'
import Link from 'next/link';

export default function CustomLink({children, href}) {
  return (
    <Link className={styles.link} href={href}>
        {children}
    </Link>
  )
}
