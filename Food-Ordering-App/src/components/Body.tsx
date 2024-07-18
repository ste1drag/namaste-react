import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { IRestaurantCard } from "../interfaces/IRestaurant";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState<IRestaurantCard[]>([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        
    }, [])

}