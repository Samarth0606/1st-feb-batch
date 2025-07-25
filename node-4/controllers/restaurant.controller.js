import RestaurantModel from "../models/Restaurant.model.js";

// READ
export async function fetchRestaurant(req,res){
    try{
        const data = await RestaurantModel.find();
        if(!data){
            return res.status(404).json({message: "Restaurant mot found"})
        }
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json("SERVER ERROR" , err)
    }
}
// CREATE
export async function createRestaurant(req,res){
    try{
        // console.log( req.body ); //by default req.body is always undefined
        // const {name,imageUrl,rating,deliveryTime,cuisines} = req.body;
        // const data = await RestaurantModel.create({name,imageUrl,rating,deliveryTime,cuisines})
        const data = await RestaurantModel.create(req.body)
        return res.status(201).json({"New Restaurant" : data})
    }
    catch(err){
        return res.status(500).json("SERVER ERROR" , err)
    }
}
// UPDATE
export async function updateRestaurant(req,res) {
    try{
        const {id} = req.params;    // req.params.id 
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id , req.body , {new:true} );
        return res.status(200).send(updatedRestaurant)
    }
    catch(err){
        return res.status(500).json("SERVER ERROR" , err)
    } 
} 

// DELETE
export async function deleteRestaurant(req,res) {
    try{
        const {id} = req.params; 
        const deletedRestaurant = await RestaurantModel.findByIdAndDelete(id);
        return res.status(200).json({"Message": "Restaurant deleted successfully"})
    }
    catch(err){
        return res.status(500).json("SERVER ERROR" , err)
    } 
} 