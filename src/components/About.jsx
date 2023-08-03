import React from 'react'

export default function About(){
    return(
        <>

        <div className='grid grid-cols-5 grid-rows-2 mx-10 justify-center items-center gap-5'>

            

            <div className=' col-span-3 font bg-gray text-white  p-6 rounded-md'>
                <h2 className='text-xl font-bold mb-3'>My Work</h2>
                <p className='font-semibold mb-3'>
                You can explore a collection of my latest web development projects, showcasing my skills in React.js, React Router, Tailwind CSS and Firebase. I have worked on a diverse range of projects for clients around the globe as well as on my own personal projects.
                Each project is a testament to my dedication to crafting stunning and functional websites that deliver exceptional user experiences and exceed client expectations.


                </p>
                <button className='bg-violet-600 p-2 rounded-xl font-bold'>Browse Portfolio 🛸</button>
            </div>

            <div className='font bg-gray text-white  col-span-2 p-6 rounded-md'>
                <h2 className='text-xl font-bold mb-3'>About</h2>
                <p className='font-semibold mb-3'>
                Aspiring Full-Stack Developer with expertise in React.js, Tailwind CSS, Javascript, React Router, Git, Firebase, SQL, and Wordpress. Built custom applications for diverse clients and constantly improving skills, and staying up-to-date with latest technologies.
                </p>
                <button className='bg-violet-600 p-2 rounded-xl font-bold'>Download CV 📑</button>

            </div>

        </div>
        
        </>
    )
}