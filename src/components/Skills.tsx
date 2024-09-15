import React from 'react'
import RecoilImage from '../../public/image/stack/recoil-logo.webp'
import Image from 'next/image'



export default function Skills() {

    return(
        <main className=' bg-neutral-950 text-white py-10 sm:py-10 md:px-20'>
            <div className='container flex flex-col gap-7'>
                <h2 className='text-xl sm:text-2xl font-bold'>Skills ⚒️</h2>

                <section className='grid grid-cols-2 sm:grid-cols-10 grid-rows-7 gap-3'>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-4 items-center justify-center hover:cursor-pointer hover:bg-[#61DAFB] hover:border-[#61DAFB]'>
                        <img src="https://skillicons.dev/icons?i=react" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>React</span>
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white'>
                        <img src="https://skillicons.dev/icons?i=nextjs" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>NextJs</span> 
                    </div>

                    <div className='p-2 col-span-2 sm:col-span-2 sm:row-span-3  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-sky-600 hover:text-white hover:border-sky-600'>
                        <img src="https://skillicons.dev/icons?i=typescript" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>TypeScript</span>     
                    </div>
                    
                    <div className='p-2 col-span-2 sm:col-span-4 sm:row-span-3 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-yellow-400 hover:border-yellow-400'>
                        <img src="https://skillicons.dev/icons?i=javascript" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>JavaScript</span>      
                    </div>

                    <div className='p-2 sm:col-span-4 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white '>
                        <Image src={RecoilImage} width={400} height={100} alt='skills-recoil' className=' w-24'  /> 
                        {/* <span className='text-xl'>Recoil</span>       */}
                    </div>

                    <div className='p-2 sm:col-span-4 sm:row-span-1  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-sky-600 hover:text-white hover:border-sky-600'>
                        <img src="https://skillicons.dev/icons?i=tailwindcss" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Tailwindcss</span>     
                    </div>

                    <div className='p-2 sm:col-span-3 sm:row-span-1  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white '>
                        <img src="https://skillicons.dev/icons?i=express" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>ExpressJs</span>    
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-green-600 hover:text-white hover:border-green-600'>
                        <img src="https://skillicons.dev/icons?i=mongodb" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>MongoDB</span>    
                    </div>

                    

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-sky-700 hover:text-white hover:border-sky-700'>
                        <img src="https://skillicons.dev/icons?i=postgres" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Postgres</span>   
                    </div>

                    <div className='p-2 sm:col-span-3 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-violet-400 hover:text-white hover:border-violet-400'>
                        <img src="https://skillicons.dev/icons?i=prisma" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Prisma</span>     
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white'>
                        <img src="https://skillicons.dev/icons?i=aws" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>AWS</span>        
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-500'>
                        <img src="https://skillicons.dev/icons?i=docker" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Docker</span>     
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1  border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-orange-600 hover:text-white hover:border-orange-600'>
                        <img src="https://skillicons.dev/icons?i=git" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Git</span>        
                    </div>

                    <div className='p-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-green-600 hover:text-white hover:border-green-600'>
                        <img src="https://skillicons.dev/icons?i=nginx" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>nginx</span>      
                    </div>

                    <div className='p-2 col-span-2 sm:col-span-2 sm:row-span-1 border-2 bg-white/90 text-gray-700 rounded-lg font-bold flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white '>
                        <img src="https://skillicons.dev/icons?i=linux" alt="x-social" className='w-10'  /> 
                        <span className='text-xl'>Linux</span>      
                    </div>

                </section>

            </div>
        </main>
    )
}
