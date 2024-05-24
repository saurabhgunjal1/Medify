import * as React from 'react';
import styles from "./navbar.module.css"
import medifylogo from "../../img/medifylogo.png"
import Button from '../button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
function Navbar() {
    const location = useLocation();
    const isLandingPage = location.pathname === "/";
    const navigate = useNavigate();
    const handleBookClick = () => {
        navigate('/booking');
    }
    return (
        <div>
            <div className={styles.bluediv}>
                <h6 style={{ color: "white", margin: "0px", padding: "9px 0px", textAlign: "center" }}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</h6>
                <div className={styles.navbardiv}>
                    <Link to="/">
                        <img src={medifylogo} alt="logo img" className={styles.logoimg} />
                    </Link>
                    <div className={styles.navbardivcontainer}>
                        <span>Find Doctors</span>
                        <span>Hospitals</span>
                        <span>Medicines</span>
                        <span>Surgeries</span>
                        <span>Software for Provider</span>
                        <span>Facilities</span>
                        <Button style='navbtn' onClick={handleBookClick}>My Bookings</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
