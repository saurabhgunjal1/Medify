import React from 'react'
import styles from "./news.module.css"
import detox from "../../img/detox.png"
import samlllog from "../../img/smallesticon.png"


export default function News() {


    return (
        <div className={styles.newsdiv}>
            <span>Blog $ News</span>
            <h1>Read Our Latest News</h1>
            <div className={styles.cardstopdiv}>
                <div className={styles.cardsdiv}>
                    <img src={detox} alt="" className={styles.detoximg} />
                    <span>Medical  March 31,2022</span>
                    <h4 >6 Tips To Protect Your Mental Health When You're Sick</h4>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={samlllog} alt="" />
                        <span className={styles.lastspan}>Rebecca Lee</span>
                    </div>
                </div>
                <div className={styles.cardsdiv}>
                    <img src={detox} alt="" className={styles.detoximg} />
                    <span>Medical  March 31,2022</span>
                    <h4 >6 Tips To Protect Your Mental Health When You’re Sick</h4>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={samlllog} alt="" />
                        <span className={styles.lastspan}>Rebecca Lee</span>
                    </div>
                </div>
                <div className={styles.cardsdiv}>
                    <img src={detox} alt="" className={styles.detoximg} />
                    <span>Medical  March 31,2022</span>
                    <h4 >6 Tips To Protect Your Mental Health When You’re Sick</h4>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={samlllog} alt="" />
                        <span className={styles.lastspan}>Rebecca Lee</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
