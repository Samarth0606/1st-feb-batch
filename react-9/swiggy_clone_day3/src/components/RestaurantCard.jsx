import React from 'react'

function RestaurantCard({item}) {
  return (
    <div className='m-8 w-58'>
        <img className='h-42 w-58 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} alt="" />
        <h1 className='font-bold pl-2'>{item?.info?.name}</h1>
        <span className='font-bold pl-2'>{item?.info?.avgRating}</span>
        <span className='font-bold mx-3 pl-2'>{item?.info?.sla?.slaString}</span>
        <p className='pl-2'>{item?.info?.cuisines[0]}</p>
        <p className='pl-2'>{item?.info?.locality}</p>
    </div>
  )
}

export default RestaurantCard