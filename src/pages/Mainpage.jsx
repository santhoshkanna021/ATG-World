import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import PostCarousel from '../components/PostCarousel'
import Typesofpost from '../components/Typesofpost'

const Mainpage = () => {
  return (
    <div>

        <Navbar/>
        <Header/>
        <Typesofpost/>
        <PostCarousel/>

    </div>
  )
}

export default Mainpage