import React from 'react'
import styles from "./specialization.module.css"
import lab from "../../img/Drugstore.png"
import statusscope from "../../img/statusscope.png"
import heart from "../../img/heart.png"
import cardio from "../../img/Heart Rate Monitor.png"
import testtube from "../../img/Blood Sample.png"
import imune from "../../img/Immune.png"
import xray from "../../img/X-Ray.png"
import Button from '../button/Button'



export default function Specialization() {


    return (
        <div className={styles.spcialisationdiv}>
            <h1>Find by specialisation</h1>
            <div className={styles.iconsdiv}>
                <div className={styles.icontextdiv}>
                    <img src={lab} alt="img" className={styles.iconimg} />
                    <span>Dentistry</span>
                </div>
                <div className={styles.icontextdiv}>
                    <img src={statusscope} alt="img" className={styles.iconimg} />
                    <span>Primary Care</span>
                </div>
                <div className={styles.icontextdiv}>
                    <img src={heart} alt="img" className={styles.iconimg} />
                    <span>Cardiology</span>
                </div>
                <div className={styles.icontextdiv}>
                    <img src={cardio} alt="img" className={styles.iconimg} />
                    <span>MRI Resonance</span>
                </div>
                <div className={styles.icontextdiv}>
                    <img src={testtube} alt="img" className={styles.iconimg} />
                    <span>Blood Test</span>
                </div>
                <div className={styles.icontextdiv}>
                    <img src={imune} alt="img" className={styles.iconimg} />
                    <span>Piscologist</span>
                </div>
                <div className={styles.icontextdiv}>
                    <img src={lab} alt="img" className={styles.iconimg} />
                    <span>Laboratory</span>
                </div>
                <div className={styles.icontextdiv}>
                    <img src={xray} alt="img" className={styles.iconimg} />
                    <span>X-Ray</span>
                </div>
            </div>
            <Button>View All</Button>
        </div>
    )
}
