import React, { useState } from 'react';


//icom
import { IoIosAdd, IoMdArrowDown, IoMdArrowDropright, IoMdArrowDropup} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import FoodItem from '../Restaurant/Order-Online/FoodItem';

//components
function CartSM({toggel}) {
    return(
        <>
        <div className= 'md:hidden flex item-center justify-between'>
        <div className='flex flex-col item-start'>
            <small className='flex item-center gap-1'>
                3 Item <IoMdArrowDropup/>
            </small>
            <h4>
                $300 <sub>(plus tax)</sub>
            </h4>
            <button className='flex  item-center gap-1 bg-zomato-400 px-3 py-1 text-white ronded-lg'>
            Continue <IoMdArrowDropright />
            </button>
        </div>
        </div>
        </>
    )
} 

function CartLg({toggel}) {
    return(
        <>
        <div className= 'hidden md:flex item-center justify-between container px-20 mx-auto'>
        <div className='flex gap-2 text-xl item-start'>
            <span className='border bg-white border-gray-300 p-1 rounded' onClick={toggel}>
            <IoMdArrowDropup/>
            </span>
            <h4>Your Order (3) </h4>
        </div>
        <div className='flex item-center gap-2'>
            <h4 className='text-xl'>Subtotal: $300 </h4>
            <button className='flex  item-center gap-1 bg-zomato-400 px-3 py-1 text-white ronded-lg'>
            Continue <IoMdArrowDropright />
            </button>
        </div>
        </div>
        </>
    )
}

function CartContainer() {

    const [isOpen, setIsOpen] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [foods, setFoods] = useState([
        {
            image:
              "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
            name: "Chilli Paneer Gravy",
            price: "157.50",
            quantity: 4,
            descript:
              "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
          },
          {
            image:
              "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
            name: "Chilli Paneer Gravy",
            price: "157.50",
            quantity: 3,
            descript:
              "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
          },
    ]);

    const toggelCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);

    return (
        <>
           {isOpen && (
               <div className='fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-16 px-3'>
                   <div className='flex item-center justify-between md:px-20'>
                    <h3 className='text-xl font-semibold'>Your Orders</h3>
                    <IoCloseSharp onClick={closeCart} />
                   </div>
                   <hr className='my-2' />
                   <div className='flex flex-col gap-2 md:px-20'>
                    {foods.map((food) => (
                        <FoodItem {...food} key={foods._id} />
                    ))};
                   </div>
              </div>
           )} 
           <div className='fixed w-full bg-white z-10 py-4 px-3 botton-0'>
               <CartSM toggel={toggelCart} />
               <CartLg toggel={toggelCart} />        
         </div>
        </>
    )
}

export default CartContainer;
