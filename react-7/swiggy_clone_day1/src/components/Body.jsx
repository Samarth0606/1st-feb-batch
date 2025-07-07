import React from 'react'
import RestaurantCard from './RestaurantCard'
import Apicalling from './Apicalling'

function Body() {

    const restArr = Apicalling();

  return (
    <div>
        <h1 className='font-bold text-2xl m-10'>Restaurants with online food delivery in Chhindwara</h1>
        <button className='text-lg border rounded-xl w-1/12 ml-20'>Rating 4.5+</button>
        <button className='text-lg border rounded-xl w-1/12 ml-10'>Reset</button>
        <div className='flex flex-wrap m-auto w-10/12'>
           {
            restArr.map((item)=>{
                return(
                    <RestaurantCard item={item} />
                )
            })
           }
        </div>
    </div>
  )
}

export default Body