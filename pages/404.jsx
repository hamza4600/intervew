import Link from 'next/link';
import React from 'react';
import styles from "./common.module.css"

function Index() {
 
    return (
    <div className={styles.Four}>
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <div><Link href={"/"}>
            <a>Go to  Home</a> 
        </Link></div>
    </div>
  )
}

export default Index