import React from 'react';
import { useParams } from "react-router-dom";
import Delivery  from './Delivery';
import Brand from './Delivery/Brand';

function Temp() {
    const { type } = useParams();
    return (
        <div className= " my-5"> 
         { type === "delivery" && <Brand />}
        { type === "delivery" && <Delivery/>}
         </div>
    )
}

export default Temp;
