const Restaurantcard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card">
            <img className="resturant-image" alt="restro-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
            <h4>{resData.avgRating} star rating</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.areaName}</h4>
            <h4>{resData.cuisines.join(", ")}</h4>
        </div>
    )
}

export default Restaurantcard;