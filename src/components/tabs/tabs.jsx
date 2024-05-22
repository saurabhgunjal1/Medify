import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from "./tabs.module.css";

// Function to generate dates starting from today
const generateDates = (numDays) => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < numDays; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date);
    }
    return dates;
};

// Format date as desired
const formatDate = (date) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString(undefined, options);
};

// Function to generate time slots for a day
const generateTimeSlots = () => {
    return {
        morning: ["11:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
        evening: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"]
    };
};

export default function CustomTabs(props) {
    const [value, setValue] = useState(0);
    const [selectedDate, setSelectedDate] = useState(generateDates(7)[0]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSelectedDate(generateDates(7)[newValue]);
    };

    const dates = generateDates(7); // Generate 7 dates starting from today
    const timeSlots = generateTimeSlots();

    return (
        <Box sx={{ bgcolor: 'background.paper' }} className={styles.tabbox}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {dates.map((date, index) => (
                    <Tab
                        key={index}
                        label={
                            <div className={styles.tabsheaddiv}>
                                <h4>{formatDate(date)}</h4>
                                <span>11 Slots Available</span>
                            </div>
                        }
                        value={index}
                    />
                ))}
            </Tabs>

            <div className={styles.tappanelcolomndivtop}>
                <div className={styles.tappanelcolomndiv}>
                    Morning
                    {timeSlots.morning.map((slot, index) => (
                        <span key={index}>{slot}</span>
                    ))}
                </div>
                <div className={styles.tappanelcolomndiv}>
                    Afternoon
                    {timeSlots.afternoon.map((slot, index) => (
                        <span key={index}>{slot}</span>
                    ))}
                </div>
                <div className={styles.tappanelcolomndiv}>
                    Evening
                    {timeSlots.evening.map((slot, index) => (
                        <span key={index}>{slot}</span>
                    ))}
                </div>
            </div>
        </Box>
    );
}
