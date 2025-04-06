
import RestaurentCard from "./RestaurentCard";
import { restaurents } from "../utils/mockData";
import { useEffect, useState } from "react";

function Body() {

    const [filteredRestaurents, setfilteredRestaurents] = useState(restaurents);

    const [filters, setFilters] = useState({
        ratings: false,
        fastDelivery: false 
    });

    useEffect(()=>{
        setfilteredRestaurents(
            restaurents.filter((restaurent) => {
                const {ratings, fastDelivery} = filters;

                if( ratings && fastDelivery){
                    return(
                        restaurent.rating >= 4 &&
                        restaurent.deliveryTime.split("-")[1] <= 40
                    );
                } else if(ratings){
                    return restaurent.rating >= 4;
                } else if(fastDelivery){
                    console.log(restaurent)
                   return restaurent.deliveryTime.split("-")[1] <= 40;
                }else{
                    return true;
                }
            })
        );
    },[filters]);

    function handleFilterUpdate(filter){

        // const value = filter === "ratings" ? !filters.ratings : !filters.fastDelivery;
        const value = !filters[filter];
        console.log(value);
        setFilters(prev => ({...prev, [filter] : value}));

        
    }


    function handleRemoveFilter(){
    }

    function handleRemoveFastDeliveryFilter(){
          
    }

    return (
        <div className="mx-auto w-5/6">
            <h1 className="font-bold p-8 text-xl">
                Restaurents with online food delivery
            </h1>
            
            <div 
                className={`flex items-center border-2 rounded-lg border-slate-400 ml-8 w-fit  ${filters.ratings ? "bg-slate-200" : " "}`}
            >
                <button className={`p-2`} onClick={()=>handleFilterUpdate("ratings")}>
                    Ratings4.0+
                </button>

                {
                    filters.ratings ? (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x ml-2" 
                        viewBox="0 0 16 16"
                        onClick={handleRemoveFilter}
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>) : ( " ")
                }
            </div>

            <div 
                className={`flex items-center border-2 rounded-lg border-slate-400 ml-8 w-fit  ${filters.fastDelivery ? "bg-slate-200" : " "}`}
            >
                <button className={`p-2`} onClick={()=>handleFilterUpdate("fastDelivery")}>
                    Fast Delivary
                </button>
                {
                    filters.fastDelivery ? (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x ml-2" 
                        viewBox="0 0 16 16"
                        onClick={handleRemoveFastDeliveryFilter}
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>) : ( " ")
                }
            </div>

            <div className="flex flex-wrap">
                {filteredRestaurents.map((restaurent)=>(
                    <RestaurentCard details = {restaurent}/>
                ))}
            </div>
        </div>
    );
}

export default Body;