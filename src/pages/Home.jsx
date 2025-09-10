import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutp from '../components/Aboutp'
import Features from '../components/Features'
import Servicesp from '../components/Servicesp'

const Home = () => {
  return (
    <div className='mt-10'>

<Hero/>
<Aboutp/>
<Features/>
<Servicesp/>


    </div>
  )
}

export default Home