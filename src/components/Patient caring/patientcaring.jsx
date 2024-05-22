import React from 'react'
import styles from "./patientcaring.module.css"
import patient1 from "../../img/patient1.png"
import patient2 from "../../img/patient2.png"
import patientimg from "../../img/patienttextimag.png"


export default function Patientcaring() {


    return (
        <div className={styles.patientcaringdiv}>
            <div className={styles.patientleftdiv}>
                <img src={patientimg} alt="" className={styles.consultation} />
                <img src={patient1} alt="img" className={styles.patientimage1} />
                <img src={patient2} alt="img" className={styles.patientimage2} />

            </div>
            <div className={styles.contentrightdiv}>
                <h3>Helping Patients From Around The Globe!</h3>
                <h1>Patient <span>Caring</span></h1>
                <p>
                    Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner.
                    We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                </p>
                <ul>
                    <li>Stay Updated About Your Health</li>
                    <li>Check Your Results Online</li>
                    <li>Manage Your Appointments</li>
                </ul>
            </div>
        </div>
    )
}
