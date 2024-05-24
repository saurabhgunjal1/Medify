import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./herosection1.module.css";
import Button from "../button/Button";
import doctor from "../../img/herosectionimg.png";
import ambulance from "../../img/Ambulance.png";
import doctorpng from "../../img/Doctor.png";
import Drugstore from "../../img/Drugstore.png";
import hospital from "../../img/Hospital.png";
import capsul from "../../img/Capsule.png";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import Searchbar from "../search/searchbar";

export default function Herosection1() {
    const navigate = useNavigate();
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [statesList, setStatesList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);

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
        <div style={{ position: "relative" }}>
            <div className={styles.Herosectiondiv}>
                <div className={styles.leftsidediv}>
                    <h2 style={{ margin: "0", color: "#102851" }}>
                        Skip the travel! Find Online
                    </h2>
                    <h1 style={{ margin: "0", fontSize: "60px", fontWeight: "900" }}>
                        Medical <span className={styles.centersword}>Centers</span>
                    </h1>
                    <p
                        style={{
                            display: "flex",
                            textAlign: "left",
                            color: "#5C6169",
                            marginTop: "0",
                        }}
                    >
                        Connect instantly with a 24x7 specialist or choose to video visit a
                        particular doctor.
                    </p>
                    <Button style="herobtn">Find Centers</Button>
                </div>
                <div className={styles.rightsidediv}>
                    <img src={doctor} alt="img" className={styles.doctorimg} />
                </div>
            </div>
            <div className={styles.card}>
                <Searchbar />
                <h4 style={{ color: "#102851", textAlign: "center" }}>You may be looking for</h4>

                <div className={styles.iconsdiv}>
                    <div className={styles.icontextdiv}>
                        <img src={doctorpng} alt="img" className={styles.iconimg} />
                        <span>Doctors</span>
                    </div>
                    <div className={styles.icontextdiv}>
                        <img src={Drugstore} alt="img" className={styles.iconimg} />
                        <span>Labs</span>
                    </div>
                    <div className={styles.icontextdiv}>
                        <img src={hospital} alt="img" className={styles.iconimg} />
                        <span>Hospitals</span>
                    </div>
                    <div className={styles.icontextdiv}>
                        <img src={capsul} alt="img" className={styles.iconimg} />
                        <span>Medical Store</span>
                    </div>
                    <div className={styles.icontextdiv}>
                        <img src={ambulance} alt="img" className={styles.iconimg} />
                        <span>Ambulance</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
