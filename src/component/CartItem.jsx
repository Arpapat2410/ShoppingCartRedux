import React from 'react'
import { GrClose } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { removeFromcart,increaseQunatity,decreaseQunatity } from '../redux/carts/action';
import { addQuantity,removeQuantity } from '../redux/products/actions';

const CartItem = ({ product }) => {
    const dispatch = useDispatch()
    const { id, imageURL, name, quantity, price, category, productId } = product;
    const handleRemoveFromCart = () =>{
        dispatch(removeFromcart(id));
        dispatch(addQuantity(productId,quantity))
    } 

    if (quantity === 0 ) { 
        handleRemoveFromCart()
    } 
    const handleIncreaseQunatity = () => {
        dispatch(increaseQunatity(id))
        dispatch(removeQuantity(productId))
    }
    const handleDecreaseQunatity = () => {
        
        dispatch(decreaseQunatity(id)); // ลดจำนวนสินค้าในตะกร้า
        dispatch(addQuantity(productId, 1)); // เพิ่มจำนวนสินค้าในสต็อกลง 1 ชิ้น
        
    }
    return (
        <div className='rounded-lg'>
            <div className='justify-between mb-6 rounded-lg p-6 shadow-sm shadow-[#ffaa00] sm:flex sm:justify-start border border-[#ffaa00] '>
                <img src={imageURL} alt={product} className='w-full h-32 rounded sm:w-40' />

                <div className='sm:ml-4 sm:flex sm:flex-col sm:w-full sm:justify-between'>
                    <div className='mt-4 sm:mt-0'>
                        <h3 className='text-2xl font-bold'>{name}</h3>
                        <p className='mt-3 text-sm '>Price : {price} ฿</p>
                        <p className='mt-3 text-sm'>Category : {category}</p>
                    </div>
                </div>

                <div className="mt-3 flex justify-between sm:space-y-6 sm:flex sm:flex-col sm:space-x-6 ">
                    
                    
                    <div className='flex items-center border-gray-100'>
                        <span className='btn cursor-pointer bg-[#ffaa00] rounded-1 py-1 px-5 duration-100 hover:bg-blue-500 hover:text-blue-5005 text-white ' onClick={handleDecreaseQunatity}>
                            {" "}
                            -{" "}
                        </span>
                        <input
                            type='number'
                            min='1'
                            value={quantity}
                            className='btn h-8 w-20 border text-center text-xl text-[#ffaa00] outline-none bg- px-5 pr-2 '
                        />
                        <span className='btn cursor-pointer rounded-l bg-base-300 py-1 px-5 duration-100  hover:bg-blue-600 hover:text-blue-600' onClick={handleIncreaseQunatity}>
                            {" "}
                            +{" "}
                        </span>
                    </div>

                    <div className='flex items-center space-x-4 text-end'>
                        <p className='text-xl'>{price * quantity}฿ </p>
                        <button className='lws-removeFromCart'onClick={handleRemoveFromCart}><GrClose /></button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CartItem