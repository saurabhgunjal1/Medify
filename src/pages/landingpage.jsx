import React from 'react'

import Navbar from '../components/navbar/navbar'
import Layout from '../components/layout/layout'
import Herosection1 from '../components/hero section1/herosection1'
import Swipercards from '../components/swiper/swiper'
import Specialization from '../components/specialiaztion/specialization'
import SpcialistSwiper from '../components/specialiaztion/spcialistswiper'
import Patientcaring from '../components/Patient caring/patientcaring'
import News from '../components/news/news'
import Families from '../components/cardsnext component/families'
import Faq from '../components/faq/faq'

export default function Landingpage() {


    return (
        <Layout >
            <Herosection1 />
            <Swipercards />
            <Specialization />
            <SpcialistSwiper />
            <Patientcaring />
            <News />
            <Families />
            <Faq />
        </Layout>
    )
}
