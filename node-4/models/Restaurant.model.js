// models => JS classes => start with capital letter

// schema -> model

import mongoose from "mongoose"

const restaurantSchema = new mongoose.Schema({
    name: String ,
    imageUrl: String ,
    rating: String ,
    cuisines: String ,
    deliveryTime: String 
})

const RestaurantModel = mongoose.model('Restaurants', restaurantSchema);

export default RestaurantModel;





// const restaurantSchema =  new mongoose.Schema({
//     name: {
//         type:String,
//         required: true,
//         trim: true
//     } ,
//     imageUrl: String ,
//     rating: String ,
//     cuisines: String ,
//     deliveryTime: String 
// })













