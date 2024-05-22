import React from 'react'
import Layout from '../components/layout/layout'
import Search from '../components/search/search'
import Faq from '../components/faq/faq'
import { useLocation } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Searchpage() {
    const query = useQuery();
    const state = query.get('state')
    const city = query.get('city');
    console.log(state);
    console.log(city);
    return (
        <Layout>
            <Search state={state} city={city} />
            <Faq />
        </Layout>
    )
}
