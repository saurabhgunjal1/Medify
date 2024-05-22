import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import styles from "./swiper.module.css"
import swiperimg1 from "../../img/swiper1.png"
import swiperimg2 from "../../img/swiper2.png"
export default function Swipercards() {


    return (
        <>
            <Swiper
                className={styles.swiperdiv}
                spaceBetween={50}
                slidesPerView={3}

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            // scrollbar={{ draggable: true }}

            >
                <SwiperSlide><img src={swiperimg1} alt="" className={styles.swiperimg} /></SwiperSlide>
                <SwiperSlide><img src={swiperimg2} alt="" className={styles.swiperimg} /></SwiperSlide>
                <SwiperSlide><img src={swiperimg1} alt="" className={styles.swiperimg} /></SwiperSlide>
                <SwiperSlide><img src={swiperimg2} alt="" className={styles.swiperimg} /></SwiperSlide>
                <SwiperSlide><img src={swiperimg1} alt="" className={styles.swiperimg} /></SwiperSlide>
                <SwiperSlide><img src={swiperimg2} alt="" className={styles.swiperimg} /></SwiperSlide>

            </Swiper>
        </>
    )
}
