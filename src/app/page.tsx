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

  const dock = [
    {

      title : "Resume",
      icon: <IoDocumentText className="h-full w-full text-neutral-700" />,
      href: 'https://docs.google.com/document/d/1CFhLnAvzYMlROg0xImJMrtHeCDjByRTd/edit?usp=sharing&ouid=104260973669657686969&rtpof=true&sd=true'
    },
    {
    title : "Mail",
    icon: <FiMail className="h-full w-full text-neutral-700"  />,
    href: 'mailto:stainsmault@gmail.com'
  },
  {
  title : "github",
  icon: <FaGithub className="h-full w-full text-neutral-700"   />,
  href: 'https://github.com/stainsleto'
},
{

title : "x",
    icon: <FaXTwitter className="h-full w-full text-neutral-700"  />,
    href: 'https://x.com/LetoStains'
  },
{

title : "Linkedin",
    icon: <FaLinkedin className="h-full w-full text-neutral-700" />,
    href: 'https://www.linkedin.com/in/stains-mault/'
  },
]

  return (
    <>
      <div className="fixed flex justify-center items-end w-[100vw] z-20 h-auto bottom-0 py-5">
        <FloatingDock items={dock} desktopClassName='bg-gray-900/90' />
      </div>
      <WavyBackground  >
        <Hero />
      </WavyBackground>
      <Slider />
      <About />
      <Skills />
      <Timeline data={experience} />
      <Projects />
    </>
  );
}
