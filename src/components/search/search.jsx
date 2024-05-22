import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./search.module.css";
import Button from '../button/Button';
import svgicon from "../../components/svg/icon.svg";
import searchpageimg from "../../img/searchpageimg.png";
import searchresultlogo from "../../img/searchresultlogo.png";
import ratingicon from "../../img/ratingicon.png";
import BasicTabs from "../tabs/newtab";
import Modal from '../modal/modal';

export default function Search({ state, city }) {
    const [data, setData] = useState([]);
    const [activeBookingIndex, setActiveBookingIndex] = useState(null); // State to track the active booking form index
    const [selectedDate, setSelectedDate] = useState(null); // State to track the selected date
    const [selectedTime, setSelectedTime] = useState(null); // State to track the selected time
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const [modalMessage, setModalMessage] = useState(''); // State to manage modal message

    async function getUser() {
        try {
            const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    const handleBookingForm = (index) => {
        if (activeBookingIndex === index) {
            setActiveBookingIndex(null); // Hide the form if it's already active
        } else {
            setActiveBookingIndex(index); // Show the form for the respective index
            setSelectedDate(null); // Reset selected date when a new form is opened
            setSelectedTime(null); // Reset selected time when a new form is opened
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(selectedDate)

    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
        console.log(selectedTime)
    };

    const handleSubmitBooking = () => {
        if (selectedDate && selectedTime) {
            console.log(`Selected Date: ${selectedDate}`);
            console.log(`Selected Time: ${selectedTime}`);
            setActiveBookingIndex(null); // Close the booking form
            setModalMessage(`Booking successful for ${selectedDate} at ${selectedTime}`);
            setShowModal(true); // Show the modal
        }
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
        setSelectedDate(null); // Reset selected date
        setSelectedTime(null); // Reset selected time
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className={styles.searchmaindiv}>
            <div className={styles.bluebackgrounddiv}>
                <div className={styles.searchbar}>
                    <input
                        className={styles.search}
                        type="text"
                        placeholder="&#61442; state"
                    />
                    <input
                        type="text"
                        className={styles.search}
                        placeholder="&#61442; city"
                    />
                    <Button style="searchbtn">Search</Button>
                </div>
            </div>
            <div className={styles.topsearchresultdiv}>
                <div className={styles.searchresultdiv}>
                    <h2>{data.length} medical centers available in {state}</h2>
                    <span><img src={svgicon} alt="" />Book appointments with minimum wait-time & verified doctor details</span>
                    {data.length > 0 ? (
                        data.map((hospital, index) => (
                            <div key={index}>
                                <div className={styles.searchresult}>
                                    <div className={styles.searchresultdetaildiv}>
                                        <div className={styles.searchresultdetaildivimgdiv}>
                                            <img src={searchresultlogo} alt="" />
                                        </div>
                                        <div className={styles.searchresultdetaildiv2}>
                                            <h3>{hospital["Hospital Name"]}</h3>
                                            <h5>{hospital.City}, {hospital.State}</h5>
                                            <p>{hospital["Hospital Type"]}</p>
                                            <p><span>FREE</span><span className={styles.span500}>₹500</span>Consultation fee at clinic</p>
                                            <img src={ratingicon} alt="iconimg" style={{ marginTop: "15px" }} />
                                        </div>
                                        <div className={styles.searchresultdetaildiv3}>
                                            <h3>Available Today</h3>
                                            <Button style='searchresultbtn' onClick={() => handleBookingForm(index)}>Book FREE Center Visit</Button>
                                            <Button
                                                style='searchresultbtn'
                                                onClick={() => handleSubmitBooking()}
                                                disabled={!selectedDate || !selectedTime} // Disable button if date or time is not selected
                                            >
                                                Submit Booking
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {activeBookingIndex === index && (
                                    <BasicTabs onDateChange={handleDateChange} onTimeChange={handleTimeChange} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                                )}
                            </div>
                        ))
                    ) : (
                        <h2>No medical centers found</h2>
                    )}

                </div>
                <div className={styles.searchresultrightdiv}>
                    <img src={searchpageimg} alt="" />
                </div>
            </div>
            {showModal && (
                <Modal onClose={handleCloseModal}>
                    {modalMessage}
                </Modal>
            )}
        </div>
    );
}
