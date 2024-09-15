import React from "react";
import { projects } from "../data/data";
import Image from "next/image";

type Project = {
    id: number;
    title: string;
    description: string;
    image_link: string;
    tech_stack : string;
    link: {
        github?: string;
        live_link?: string;
    }
}


export default function Projects() {
    return(
        <main className="bg-neutral-950 py-20 md:px-20 ">
            <div className="container text-white py-10 flex flex-col gap-10"> 
                <h2 className='text-xl sm:text-2xl font-bold'>Projects</h2>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-7">

                {
                    projects.map( (project : Project) => (

                        <div key={project.id} className="bg-white/20 p-3 rounded-md flex flex-col gap-3 ">
                            <Image src={project.image_link} alt={project.title} width={400} height={200} className="rounded-xl"/>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold">{project.title}</h3>
                                <h5 className="text-base font-semibold text-white/80">{project.tech_stack}</h5>
                            </div>
                            <div className="flex gap-2">   
                            {
                                project.link.github ? 
                                        <a href={project.link.github} target="_blank" className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                                        
                                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                        
                                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" /></span>
                                        
                                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-3 ring-1 ring-white/10 ">
                                                <img src="https://skillicons.dev/icons?i=github" alt="x-social" className='w-4'  />
                                                <span>
                                                    Github
                                                </span>
                                            </div>

                                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                        </a>
                                
                                : ''
                            }

                            {
                                project.link.live_link ? 
                                        <a href={project.link.live_link} target="_blank" className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                                        
                                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                        
                                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" /></span>
                                        
                                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-3 ring-1 ring-white/10 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                                </svg>
                                                
                                                <span>
                                                    Link
                                                
                                                </span>
                                            </div>

                                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                        </a> : ''
                            }
                            </div>

                            
                            
                            <p className="text-sm">{project.description}</p>
                        </div>
                    ))
                }
                   
                </section>

            </div>
        </main>
    )
}