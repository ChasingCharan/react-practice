function RestaurentCard(props){
    const {name, rating, deliveryTime,cuisines,location} = props.details;
    return(
        <div className="m-5 w-52">
            <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/4b2275d2-c3bb-481e-a82e-8946cefab767_32129.jpg" 
                alt=""
                className="rounded-md h-52 w-52"
            />
            <h1 className="font-bold">{name}</h1>
            <span>{rating}</span>
            <span className="font-bold"> {deliveryTime} mins</span>
            <p>{cuisines}</p>
            <p>{location}</p>
        </div>
    );
    
}
export default RestaurentCard;