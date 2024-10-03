import React from 'react'
import { useForm } from 'react-hook-form'
import{Link} from 'react-router-dom'

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='flex h-screen items-center justify-center shadow bg-blue-200'>
            {/* <dialog id="contact_modal" className="modal"> */}
            <div  className="w-[600px]">

                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-xl">Contact Us</h3>

                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <label>Name</label>
                            <br />
                            <input 
                                type="text" 
                                placeholder='Enter your name' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("name", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <label>Email</label>
                            <br />
                            <input 
                                type="email" 
                                placeholder='Enter your email' 
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Message */}
                        <div className='mt-4 space-y-2'>
                            <label>Message</label>
                            <br />
                            <textarea 
                                placeholder='Enter your message' 
                                className='w-80 px-3 py-1 border rounded-md outline-none h-24'
                                {...register("message", { required: true })}
                            />
                            <br />
                            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-center mt-6'>
                            <button className='bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-700 duration-200'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            {/* </dialog> */}
            </div>
        </div>
    )
}

export default ContactUs
