import React from 'react'
import styles from "./families.module.css"
import saveheart from "../../img/saveheart.png"
import drugstoreyellow from "../../img/drugstoreyellow.png"
import hospitalicon from "../../img/hospitalround.png"
import doctorsicon from "../../img/dctorss.png"

export default function Families(s) {


    return (
        <div className={styles.familiesdiv}>
            <div className={styles.familiesleftdiv}>
                <h5>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
                <h1>Our Families</h1>
                <p>
                    We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                </p>
            </div>
            <div className={styles.familiesrightdiv}>
                <div className={styles.familiescard}>
                    <div className={styles.familiescardindiv}>
                        <img src={saveheart} alt="" />
                        <h1>5000+</h1>
                        <span>Happy Patients</span>
                    </div>
                    <div className={styles.familiescardindiv}>
                        <img src={drugstoreyellow} alt="" />
                        <h1>1000+</h1>
                        <span>Laboratories</span>
                    </div>
                    <div className={styles.familiescardindiv}>
                        <img src={hospitalicon} alt="" />
                        <h1>200+</h1>
                        <span>Hospitals</span>
                    </div>
                    <div className={styles.familiescardindiv}>
                        <img src={doctorsicon} alt="" />
                        <h1>700+</h1>
                        <span>Experts Doctors</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
