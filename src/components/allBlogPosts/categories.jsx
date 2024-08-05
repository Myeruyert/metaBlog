import React, { useState } from "react";


const Categories = ({category, handleChange}) =>{
    return(
        <>
              <li><button onClick={handleChange}>{category}</button></li>
        </>
    )

}; 

export default Categories;