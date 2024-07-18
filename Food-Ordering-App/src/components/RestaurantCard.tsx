import { CDN_URL } from "../utils/constants";
import { IRestaurantCard } from "../interfaces/IRestaurant";

const RestaurantCard = (props: IRestaurantCard) => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src={CDN_URL + props.cloudinaryImageId}
            />
            <h3>{props.name}</h3>
            <h4>{props.cuisines.join(", ")}</h4>
            <h4>{props.avgRating} stars</h4>
            <h4>₹ {props.costForTwo} FOR TWO</h4>
            <h4>{props.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;