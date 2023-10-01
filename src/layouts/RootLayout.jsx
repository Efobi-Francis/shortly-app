import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Form from '../components/Form'
import MainContent from '../components/MainContent'
import BoostLink from '../components/BoostLink'
import Footer from '../components/Footer'


export default function RootLayout() {
  return (
    <div className='font-poppins text-lg text-[hsl(257,7%,63%)] overflow-x-hidden'>
        <Header/>

        <main className='px-4 bg-[hsl(225,33%,95%)] mt-40 lg:mt-[22rem] lg:px-0'>
            <Form/>
            <MainContent/>
        </main>

        <BoostLink/>

        <Footer/>
    </div>
  )
}
