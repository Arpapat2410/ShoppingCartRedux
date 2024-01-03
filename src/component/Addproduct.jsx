import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/products/actions'

const Addproduct = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit,reset,formState: { errors },} = useForm();
    const onSubmit = (data) => {
        dispatch(addProduct(data));
        reset();
    }

  return (
    <div className='container mx-autow-[60%] '>
        <div className="card lg:card-side  shadow-xl ">
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className="text-xl text-center mb-3">ADD NEW PRODUCT</span>
                <h3 className='mt-2'>Product New</h3>
                <input
                type="text"
                {...register("name", { required: true })}  
                className="input input-warning  w-full"
                />
                {errors.name && <span className='text-red-600 '>This field is required</span>}
                <h3 className='mt-2'>Category</h3>
                <select {...register("Category", { required: true })}  className='btn w-full'>
                    <option value="" >Select a category</option>
                    <option value="cloting" >Clothing</option>
                    <option value="gadgets" >Gadgets</option>
                    <option value="Bags" >Bags</option>
                </select>
                {errors.Category && <span className='text-red-600 '>This field is required</span>}
                <h3 className='mt-2'>Image URL</h3>
                <input
                type="text"
                {...register("ImageURL", { required: true })}   
                className="input input-warning w-full"
                />
                {errors.ImageURL && <span className='text-red-600 '>This field is required</span>}
                <div className='flex space-x-2 mt-2'>
                    <div>
                        <h3>Price</h3>
                        <input
                        type="number"
                        {...register("Price", { required: true , min :0 })} 
                        className="input input-warning w-full"
                        />
                        {errors.Price && <span className='text-red-600 '>This field is required</span>}
                    </div>
                    <div>
                        <h3>Quantity</h3>
                        <input
                        type="number"
                        {...register("Quantity", { required: true , min :0})} 
                        className="input input-warning w-full"
                        />
                        {errors.Quantity && <span className='text-red-600 '>This field is required</span>}
                    </div>
                
                </div>
                    <div className="card-actions justify-end mt-5">
                        <button className="btn">Clear</button>
                        <button className="btn btn-warning" >New product</button>
                    </div>
                </form>
            </div>
    </div>
    </div>
  )
}

export default Addproduct