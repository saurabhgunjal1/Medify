import React from 'react'
import styles from "./faq.module.css"

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import faq from "../../img/faq.png"

export default function Faq() {


    return (
        <div className={styles.faqdiv}>
            <h6>Get Your Answer</h6>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.faqdivsss}>
                <div className={styles.leftdiv}>
                    <img src={faq} alt="" />
                </div>
                <div className={styles.rightdiv}>
                    <div >
                        <Accordion style={{ width: "45vw" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className={styles.accordianfont}
                            >
                                Why choose our medical for your family?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ width: "45vw" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                className={styles.accordianfont}
                            >
                                Why we are different from others? Accordion 2
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ width: "45vw" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                                className={styles.accordianfont}
                            >
                                Trusted & experience senior care & love
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                            <AccordionActions>
                                <Button style={{ color: "#1b3c74" }}>Cancel</Button>
                                <Button>Agree</Button>
                            </AccordionActions>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}
