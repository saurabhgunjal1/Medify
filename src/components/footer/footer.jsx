import React from 'react'
import styles from "./footer.module.css"
import playstore from "../../img/playstore.png"
import footer from "../../img/foooter.png"

export default function Footer() {


    return (
        <div className={styles.footer}>
            <div className={styles.playstorediv}>
                <img src={playstore} alt="img" />
            </div>
            <div className={styles.footerdiv}>
                <img src={footer} alt="img" />
            </div>
        </div>
    )
}
