import { CDN_URL } from "../utils/constants";
const Restaurantcard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card">
            <img className="resturant-image" alt="restro-image" src={ CDN_URL + resData.cloudinaryImageId } />
            <h3>{resData.name}</h3>
            <h4>{resData.avgRating} star rating</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.areaName}</h4>
            <h4>{resData.cuisines.join(", ")}</h4>
        </div>
    )
}

export default Restaurantcard;