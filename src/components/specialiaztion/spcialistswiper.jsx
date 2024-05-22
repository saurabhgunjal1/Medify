import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import styles from "./spcialistswiper.module.css"
import spcialist1 from "../../img/spcialist1.png"
import spcialist2 from "../../img/spcialist2.png"
import spcialist3 from "../../img/spcialist3.png"


export default function SpcialistSwiper() {


    return (
        <>
            <h1 className={styles.spcialh1}>Our Medical Specialist</h1>

            <Swiper
                className={styles.swiperdiv}
                spaceBetween={0}
                slidesPerView={3}

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            // scrollbar={{ draggable: true }}

            >
                <SwiperSlide><img src={spcialist1} alt="" className={styles.swiperimg} /> <span className={styles.swiperspcialdiv}>Dr. Ahmad Khan Neurologist</span></SwiperSlide>
                <SwiperSlide><img src={spcialist2} alt="" className={styles.swiperimg} /> <span className={styles.swiperspcialdiv}>Dr. Heena Sachdeva Orthopadics</span></SwiperSlide>
                <SwiperSlide><img src={spcialist3} alt="" className={styles.swiperimg} /> <span className={styles.swiperspcialdiv}>Dr. Ankur Sharma Medicine</span></SwiperSlide>
                <SwiperSlide><img src={spcialist1} alt="" className={styles.swiperimg} /> <span className={styles.swiperspcialdiv}>Dr. Ahmad Khan Neurologist</span></SwiperSlide>
                <SwiperSlide><img src={spcialist2} alt="" className={styles.swiperimg} /> <span className={styles.swiperspcialdiv}>Dr. Heena Sachdeva Orthopadics</span></SwiperSlide>
                <SwiperSlide><img src={spcialist3} alt="" className={styles.swiperimg} /> <span className={styles.swiperspcialdiv}>Dr. Ankur Sharma Medicine</span></SwiperSlide>

            </Swiper>
        </>
    )
}
