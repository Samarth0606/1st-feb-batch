import axios from "axios";
import { useEffect, useState } from "react";

function Apicalling(){
    const [allRestaurant, setAllRestaurants] = useState([]);

    useEffect(()=>{        
        const API = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1"
        async function calling(){
            const resp = await axios.get(API);
            // console.log(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurants(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
        calling()
    } , [])

    return allRestaurant
}

export default Apicalling