import React from 'react'


const Hero = () => {
    return (
       
            <section className='flex flex-col scale-110 container rounded-lg justify-center text-center items-center font-bold text-white text-2xl lg:text-4xl leading-10 lg:leading-relaxed backdrop-opacity-20 backdrop-invert  bg-gray-700/40 p-2 lg:p-7 mx-auto w-[80vw] lg:w-[35vw]'>
                <h1>Hey, I&apos;m <span className='bg-sky-600 p-1 px-2 rounded-md'>Stains🧑🏻‍🦱</span></h1>
                <h1><span className=' bg-[#A7ECEE] p-1 px-2 rounded-md text-stone-700'>Full Stack</span> Engineer</h1>
                <h1>
                    {/* Advancing with  */}
                    <span className='bg-[#FFEEBB] p-1 px-2 rounded-md text-gray-700'>@Stratforge</span></h1>
                <div className=' flex gap-3 py-3 text-sm'>
                    <button className='border-2 border-solid border-white p-2 rounded-md text-white'>About me</button>
                    <a href='https://docs.google.com/document/d/1CFhLnAvzYMlROg0xImJMrtHeCDjByRTd/edit?usp=sharing&ouid=104260973669657686969&rtpof=true&sd=true' target='_blank' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center gap-1  bg-slate-100 rounded-md text-gray-700 p-2'>View Resume
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                    </a>
                </div>
            </section>
       
    )
}

export default Hero