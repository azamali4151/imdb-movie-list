import React, { useState } from "react";
const Rating = ({ isRated,rank,handleToggleRating }) =>{
    const [isHovered, setHover] = useState(false);

   const handleHover = () => {
        setHover(true);
    }

   const handleOut = () => {
        setHover(false);
    }

   const getClassName = ()=>{
       let className = isRated ? "bi bi-star-fill" : "bi bi-star";
       className += isHovered ? " text-primary" : "";
       return className;
   }
    return(
            <>
               <i 
               className={getClassName()}
               onMouseOver={handleHover} 
               onMouseOut={handleOut}
               onClick={() => handleToggleRating(rank)} 
               ></i>
            </>
    )
}

export default Rating;