import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../component/CartItem'
import Bill from '../component/Bill';

const MyCart = () => {
  const carts = useSelector((state) => state.carts)
  const product = {
    id: 1,
    imageURL: "https://source.unsplash.com/featured/?electronics",
    name: "Product 1",
    category: "Electronics",
    price: 199.99,
    quantity: 50,
  }
  return (
    <main className="py-12 max-w-7xl container mx-auto px-4">
      <div className="container mx-auto">
        <h2 className="mb-5 text-xl font-bold">Shopping Carts</h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3">
          {carts.length ? (
              carts.map((cartItem) => (
                <CartItem key={cartItem.id} product={cartItem} />
              ))
            ) : (
              <div>No product in your cart</div>
            )}
          </div>
          <div className="w-full md:w-[30%]">
              <Bill/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCart