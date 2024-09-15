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
import { IoDocumentText } from "react-icons/io5";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
export default function Home() {

  const dock = [{
    title : "mail",
    icon: <FiMail   />,
    href: 'https://home.com'
  },
  {
  title : "github",
  icon: <FaGithub   />,
  href: 'https://home.com'
},
{

title : "x",
    icon: <FaXTwitter   />,
    href: 'https://home.com'
  },
  {

  title : "resume",
  icon: <IoDocumentText  />,
  href: 'https://home.com'
},
{

title : "linkedin",
    icon: <FaLinkedin  />,
    href: 'https://home.com'
  },
]

  return (
    <>
      <div className="fixed flex justify-center items-end w-[100vw] z-20 h-auto bottom-0 py-5">
        <FloatingDock items={dock} desktopClassName='bg-gray-900/90' />
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
