'use client'

import Hero from "@/components/Hero"
import { WavyBackground } from "@/components/ui/wavy-background";
import About from "@/components/About"
import Slider from "@/components/Slider";
import Skills from "@/components/Skills";
import { Timeline } from "@/components/ui/timeline";
import { experience } from '../data/data'
import Projects from "@/components/Projects";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IoIosHome } from "react-icons/io";

export default function Home() {

  const dock = [{
    title : "home",
    icon: <IoIosHome  />,
    href: 'https://home.com'
  },
  {
  title : "home",
  icon: <IoIosHome  />,
  href: 'https://home.com'
},
{

title : "home",
    icon: <IoIosHome  />,
    href: 'https://home.com'
  },
  {

  title : "home",
  icon: <IoIosHome  />,
  href: 'https://home.com'
},
{

title : "home",
    icon: <IoIosHome  />,
    href: 'https://home.com'
  },
]

  return (
    <>
      <div className="fixed flex justify-center items-end w-[100vw] z-20 h-auto bottom-0 py-5">
        <FloatingDock items={dock} />
      </div>
      <WavyBackground children ={<Hero />} />
      <Slider />
      <About />
      <Skills />
      <Timeline data={experience} />
      <Projects />
    </>
  );
}
