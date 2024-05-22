import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./tabs.module.css";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// Function to generate dates starting from today
const generateDates = (numDays) => {
    const dates = [];
    const today = new Date();
    dates.push(today);
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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ onDateChange, onTimeChange, setSelectedTime, selectedTime }) {
    const [value, setValue] = useState(0);
    // const [selectedTime, setSelectedTime] = useState(null);
    const dates = generateDates(7); // Generate 7 dates starting from today
    const timeSlots = generateTimeSlots(); // Get the time slots

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onDateChange(dates[newValue]); // Pass the selected date to the parent component
        setSelectedTime(null); // Reset the selected time when date changes

    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
        console.log(selectedTime)
        onTimeChange(time); // Pass the selected time to the parent component
    };

    return (
        <Box sx={{ width: '100%' }} className={styles.tabbox}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.tabboxhed}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
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
                            {...a11yProps(index)} // Use index here to generate correct ids
                        />
                    ))}
                </Tabs>
            </Box>
            {dates.map((date, index) => (
                <CustomTabPanel key={index} value={value} index={index}>
                    <Box sx={{ flexGrow: 1 }} className={styles.gridcontainer}>
                        <Grid container spacing={1}>
                            {Object.entries(timeSlots).map(([timePeriod, slots]) => (
                                <Grid xs={12} key={timePeriod}>
                                    <Item>
                                        <Stack direction="row" spacing={1}>
                                            <Chip label={timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)} />
                                            {slots.map((slot, slotIndex) => (
                                                <Chip
                                                    key={slotIndex}
                                                    label={slot}
                                                    variant={selectedTime === slot ? "filled" : "outlined"}
                                                    onClick={() => handleTimeClick(slot)}
                                                />
                                            ))}
                                        </Stack>
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </CustomTabPanel>
            ))}
        </Box>
    );
}

BasicTabs.propTypes = {
    onDateChange: PropTypes.func.isRequired,
    onTimeChange: PropTypes.func.isRequired,
};
