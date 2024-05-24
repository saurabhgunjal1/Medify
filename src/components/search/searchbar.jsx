import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import styles from "./searchbar.module.css";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar, useSnackbar } from "notistack";
export default function Searchbar() {

    const navigate = useNavigate();
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [statesList, setStatesList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    async function getState() {
        try {
            const response = await axios.get(
                `https://meddata-backend.onrender.com/states`
            );
            setStatesList(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getState();
    }, []);

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setState(selectedState);

        fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
            .then((response) => response.json())
            .then((data) => setCitiesList(data))
            .catch((error) => console.error("Error fetching cities:", error));
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        if (state && city) {
            navigate(`/search?state=${state}&city=${city}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            enqueueSnackbar("Please enter both fields", { variant: "warning" });
        }
    };

    return (
        <div className={styles.searchbar}>
            <select value={state} onChange={handleStateChange}>
                <option value=""> State</option>
                {statesList.map((state) => (
                    <option key={state} value={state}>
                        {state}
                    </option>
                ))}
            </select>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">City</option>
                {citiesList.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            <Button style="searchbtn" onClick={handleSearchClick}>
                Search
            </Button>
        </div>
    )
}
