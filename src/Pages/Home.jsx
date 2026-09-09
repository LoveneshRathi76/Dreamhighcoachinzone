import React from 'react'
import HeroSlider from './HeroSlider'
import MapSection from './MapSection';
import Services from './Services2';
import Rating from './Rating';
import WhyChooseUs2 from './WhyChooseUs2';
import About2 from '../Components/About2';



function Home() {
  return (
    <div>
      <>

        <HeroSlider />
        <About2/>
        <WhyChooseUs2/>
        <Services/>
       
        <MapSection />
        <Rating/>
      </>

    </div>
  )
}

export default Home;
