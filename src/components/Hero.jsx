import React from 'react'
import { heroCards } from './data'
import Rocket from '../assets/rocket.png'
import Profile from '../assets/profile-crop.jpg'
import Map from '../assets/map.png'
import  Github from '../assets/github.png'
import  Discord from '../assets/discord.png'
import  Twitter from '../assets/twitter.png'
import  Telegram from '../assets/telegram.png'

export default function Hero() {
    return(
        <>
            <section className='flex justify-center items-center font my-7 gap-5 mx-10'>

                <div className='grid grid-cols-3 grid-rows-2 gap-3 w-1/2 '>

                    <div className='col-span-3 bg-gray text-white p-2 pl-5 rounded-md flex-col justify-between'>
                        <h2 className='text-3xl font-bold mb-5'>Bringing Ideas <br />To life in Web   <br />Through ReactJs ⚛️</h2>
                        <button className=' bg-violet-600 p-2 rounded-xl font-bold'>Hire me 👋</button>
                    </div>
                    <>

                        {
                            heroCards.map( (details, index) => (
                                <div key={index} className={`p-3 rounded-md flex flex-col justify-center items-center text-white ${details.color}`}>
                                    <h3 className='text-3xl font-extrabold'>{details.title}</h3>
                                    <p className='text-md font-bold'>{details.desc}</p>
                                </div>
                            ))
                        }
                    </>

                </div>

                <div className='grid grid-col-2 grid-row-4 gap-3 w-1/2 font-bold text-white'>

                    <div className='col-span-2 bg-gray p-3 rounded-md flex justify-between items-center'>
                        <h2 className='text-slate-300 font-extrabold'>Stains <span className='text-white'>Leto</span></h2>
                        <img  className='w-10' src={Rocket} />
                    </div>

                    <div className='row-span-3 rounded-md mr-[-110px]'>
                        <img className='rounded-md w-64 ' src={Profile} />
                    </div>

                    <div className='bg-gray p-3 rounded-md flex justify-between items-center '>
                        <p className='text-slate-300'>Name :</p>
                        <p>STAINS K S MAULT</p>

                    </div>

                    <div className='bg-gray p-3 rounded-md flex flex-col justify-center'>
                        <div className='flex justify-between mb-5'>
                            <p className='text-slate-300'>City : </p>
                            <p className='text-slate-300'>Marthandam, India </p>
                        </div>

                        <img className='rounded-md w-20' src={Map} />
                    </div>

                    <div className=' bg-gray p-3 rounded-md flex justify-evenly items-center'>
                        <img className='rounded-md w-7' src={Github} />
                        <img className='rounded-md w-7' src={Discord} />
                        <img className='rounded-md w-7' src={Twitter} />
                        <img className='rounded-md w-7' src={Telegram} />
                    </div>

                </div>
            </section>
        </>
    )
}