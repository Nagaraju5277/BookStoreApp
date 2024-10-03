import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
                <p className='mt-12'>Welcome to our Bookstore Courses! Dive into a world of knowledge and creativity designed for book lovers, aspiring authors, and literary enthusiasts. Our courses offer a unique opportunity to explore various aspects of literature, writing, and publishing. Whether you’re interested in honing your writing skills, understanding the intricacies of book marketing, or simply deepening your appreciation for different genres, we have something for everyone.</p>
                <Link to='/'>
                <button className=' m-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                {list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))}
            </div>
            
        </div>
        </>

    )
    
}

export default Course
