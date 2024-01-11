import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/products/actions'

const Addproduct = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        dispatch(addProduct(data));
        reset();
    }

    return (
        <div className='container mx-auto-[60%] border rounded-xl border-[#ffaa00] h-auto'>
            <div className="card lg:card-side  shadow-xl ">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span className="text-xl mb-3 text-center">ADD NEW PRODUCT</span>
                        <h3 className='mt-2'>Product New</h3>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="input input-warning  w-full"
                        />
                        {errors.name && <span className='text-red-600 '>This field is required</span>}
                        <h3 className='mt-2'>Category</h3>
                        <select {...register("category", { required: true })} className='btn w-full'>
                            <option value="" >Select a category</option>
                            <option value="cloting" >Clothing</option>
                            <option value="gadgets" >Gadgets</option>
                            <option value="Bags" >Bags</option>
                        </select>
                        {errors.category && <span className='text-red-600 '>This field is required</span>}
                        <h3 className='mt-2'>Image URL</h3>
                        <input
                            type="text"
                            {...register("imageURL", { required: true })}
                            className="input input-warning w-full"
                        />
                        {errors.imageURL && <span className='text-red-600 '>This field is required</span>}
                        <div className='flex space-x-2 mt-2'>
                            <div>
                                <h3>Price</h3>
                                <input
                                    type="number"
                                    {...register("price", { required: true, min: 0 })}
                                    className="input input-warning w-full"
                                />
                                {errors.price && <span className='text-red-600 '>This field is required</span>}
                            </div>
                            <div>
                                <h3>Quantity</h3>
                                <input
                                    type="number"
                                    {...register("quantity", { required: true, min: 0 })}
                                    className="input input-warning w-full"
                                />
                                {errors.quantity && <span className='text-red-600 '>This field is required</span>}
                            </div>

                        </div>
                        <div className="card-actions justify-end mt-5">
                            <button className="btn">Clear</button>
                            <button className="btn btn-[#ffaa00]" >New product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproduct