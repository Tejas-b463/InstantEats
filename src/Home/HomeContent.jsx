import React from 'react'
// import MenuCarousel from "./MenuCarousel"
// import RestaurantCarousel from "./RestaurantCarousel"
import RestaurantList from './RestaurantList'
import ShimmerUI from '../components/ShimmerUI';

const HomeContent = () => {
  return (
    <div>
        {/* <MenuCarousel/>
        <RestaurantCarousel/> */}
        <RestaurantList/>
        <ShimmerUI/>
    </div>
  )
}

export default HomeContent;