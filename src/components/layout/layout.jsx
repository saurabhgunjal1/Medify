import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import styles from "./layout.module.css"
export default function Layout({ children }) {


    return (
        <div className={styles.Layoutdiv}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
