import React from 'react'
import Addproduct from '../component/Addproduct'
import { useSelector } from 'react-redux'
import Porductitem from '../component/Porductitem'

const Home = () => {
    //useSelector กด subci product ไว้
    const products = useSelector((state) => state.products);

    return (

        <main className='py-8 max-w-7xl mx-auto px-4'>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-8'>
                
                <div className='col-span-2'>
                    <div className='grid md:grid-cols-2 gap-y-10 grid-cols-1'>

                    {products.length ? (
                            products.map((product) => (
                                <Porductitem key={product.id} product={product} />
                            ))
                        ) : (
                            <div>No Product</div>
                        )}
                            

                    </div>
                </div>
                <div><Addproduct /></div>
            </div>
        </main>

    )
}

export default Home