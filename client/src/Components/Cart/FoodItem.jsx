import React from 'react'
import {BsTrashFill} from 'react-icons/bs'

function FoodItem() {
    return (
        <>
        <div className='flex item-center justify-between'>
        <h5>{props.name}</h5>
            <div className='flex item-center gap-2'>
                
                  <div className='flex flex-col items-end'>
                    <small>$ {props.price}</small>
                    <div className=' px-1 bg-zomato-400 text-white rounded flex item-center gap-1'>
                        <button className='p-1 bg-zomato-400 text-white rounded'>
                            -
                        </button>
                        <small>
                            {props.quantity}
                        </small>
                        <button className='p-1 bg-zomato-400 text-white rounded'>
                            +
                        </button>
                    </div>
                  </div>
                  <BsTrashFill className='text-zomato-400 text-lg md:text-xl ' />
                </div>
         </div>
         <hr className='my-2' />
        </>
    )
}

export default FoodItem;
