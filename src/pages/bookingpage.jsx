import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import styles from "./bookingpage.module.css";
import Button from "../components/button/Button";
import searchpageimg from "../../src/img/searchpageimg.png";
import searchresultlogo from "../../src/img/searchresultlogo.png";


export default function Bookingpage(props) {
    const [bookings, setBookings] = useState([]);
    const [searchHospital, setSearchHospital] = useState('');
    const [hospitalData, setHospitalData] = useState([]);


    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem("bookingData")) || [];
        setBookings(storedBookings);
        setHospitalData(storedBookings); // Initially show all bookings
    }, []);

    const handleHospitalSearch = () => {
        console.log(searchHospital);
        const data = bookings.filter((booking) =>
            booking.hospital.toLowerCase().includes(searchHospital.toLowerCase())
        );

        setHospitalData(data);


        console.log(data);
    };

    return (
        <Layout>
            <div className={styles.searchmaindiv}>
                <div className={styles.bluebackgrounddiv}>
                    <h1>My Bookings</h1>
                    <div className={styles.searchbar}>
                        <input
                            className={styles.search}
                            type="text"
                            placeholder="&#61442; hospital name"
                            value={searchHospital}
                            onChange={(e) => setSearchHospital(e.target.value)}
                        />
                        <Button style="searchbtn" onClick={handleHospitalSearch}>Search</Button>
                    </div>
                </div>
                <div className={styles.topsearchresultdiv}>
                    <div className={styles.searchresultdiv}>
                        {hospitalData.length > 0 ? (
                            hospitalData.map((booking, index) => (
                                <div key={index}>
                                    <div className={styles.searchresult}>
                                        <div className={styles.searchresultdetaildiv}>
                                            <div className={styles.searchresultdetaildivimgdiv}>
                                                <img src={searchresultlogo} alt="" />
                                            </div>
                                            <div className={styles.searchresultdetaildiv2}>
                                                <h3>{booking.hospital}</h3>
                                                <h5>{booking.city}, {booking.state}</h5>
                                                <p>{booking.HospitalType}</p>
                                            </div>
                                            <div className={styles.searchresultdetaildiv3}>
                                                <span className={styles.seletedtime}>
                                                    {booking.selectedTime}
                                                </span>
                                                <span className={styles.seleteddate}>
                                                    {booking.selectedDate}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h2>No bookings found</h2>
                        )}
                    </div>
                    <div className={styles.searchresultrightdiv}>
                        <img src={searchpageimg} alt="" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
