import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Apicalling from './Apicalling'
import Search from './Search';
import { Link } from 'react-router-dom';

function Body() {

  const restArr = Apicalling(); //take time
  const [allRestaurant, setAllRestaurants] = useState(restArr);
  const [isClicked1,setIsClicked1] = useState(false)
  const [isClicked2,setIsClicked2] = useState(false)

    useEffect(()=>{
      if(restArr && restArr.length){
        setAllRestaurants(restArr)
      }
    } , [restArr])
    
    function handleTopRating(restArr){
      console.log("entered the btn");
      let ratingFilteredArray = restArr.filter((restaurant)=> restaurant.info.avgRating>=4.5 )
      setAllRestaurants(ratingFilteredArray)
      setIsClicked2(false)
      setIsClicked1(true)
    }
    function handleReset(restArr){
      setAllRestaurants(restArr)
      setIsClicked2(true)
      setIsClicked1(false)
    }

  return (
    <div>
        <h1 className='font-bold text-2xl m-10'>Restaurants with online food delivery in Chhindwara</h1>
        
        <Search restArr={restArr} setAllRestaurants={setAllRestaurants} />
        
        <button onClick={()=>handleTopRating(restArr)} className={isClicked1? "text-lg border rounded-xl w-1/12 ml-20 bg-yellow-200" : "text-lg border rounded-xl w-1/12 ml-20"}>Rating 4.5+</button>
        <button onClick={()=>handleReset(restArr)} className={isClicked2 ? 'text-lg border rounded-xl w-1/12 ml-10 bg-amber-200' : 'text-lg border rounded-xl w-1/12 ml-10'}>Reset</button>
          <div className='flex flex-wrap m-auto w-10/12'>
            {
              allRestaurant.map((item)=>{
                return(
                    <Link to={`/restaurant/${item.info.id}`}>
                      <RestaurantCard item={item} />
                    </Link>
                  )
              })
            }
          </div>
    </div>
  )
}

export default Body