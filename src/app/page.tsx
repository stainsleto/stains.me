import Hero from "@/components/Hero"
import { WavyBackground } from "@/components/ui/wavy-background";
import About from "@/components/About"
import Slider from "@/components/Slider";
import Skills from "@/components/Skills";
import { Timeline } from "@/components/ui/timeline";



export default function Home() {

  const experience  = [
    {
      title: 'FullStack Engineer',
      content: <section className="bg-white/20 rounded-md  w-4/6 p-5 flex flex-col gap-5">
          <div className="flex gap-3">
            <span className="rounded-md border-2 border-white/20 bg-sky-600 px-2 flex p-1 font-bold gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
              Dubai
            </span>

            <span className="rounded-md border-2 border-white/20 bg-sky-600 px-2 flex p-1 font-bold gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              Remote, India
            </span> <br />
          </div>

          <h4 className="font-bold">FullStack Engineer • Sep 2024 - Present </h4>
          
          <ul className="flex flex-col gap-3">
            <li>
            • Integrated APIs with the frontend of the application, ensuring seamless data flow and functionality.
            </li>
            <li>
            • Utilized Next.js to implement frontend logic, employed Redux Toolkit Query for efficient API integration and state management, streamlining data handling and improving application responsiveness .
            </li>
          </ul>
         
      </section>,
    },
    {
      title: 'Frontend Engineer (Intern)',
      content: <section className="bg-white/20 rounded-md  w-4/6 p-5 flex flex-col gap-5">
          <div className="flex gap-3">
            <span className="rounded-md border-2 border-white/20 bg-sky-600 px-2 flex p-1 font-bold gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
              buildnboost
            </span>

            <span className="rounded-md border-2 border-white/20 bg-sky-600 px-2 flex p-1 font-bold gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              Remote, India
            </span> <br />
          </div>
          <h4 className="font-bold">Frontend Engineer (Intern) • July 2024 - Aug 2024 </h4>
          <ul className="flex flex-col gap-3">
            <li>
            • Integrated APIs with the frontend of the application, ensuring seamless data flow and functionality.
            </li>
            <li>
            • Utilized Next.js to implement frontend logic, employed Redux Toolkit Query for efficient API integration and state management, streamlining data handling and improving application responsiveness .
            </li>
          </ul>
      </section>,
    },
    {
      title: 'Freelance Developer',
      content: <section className="bg-white/20 rounded-md  w-4/6 p-5 flex flex-col gap-5">
          <div className="flex gap-3">
            <span className="rounded-md border-2 border-white/20 bg-sky-600 px-2 flex p-1 font-bold gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
              Freelance Web Developer
            </span>

            <span className="rounded-md border-2 border-white/20 bg-sky-600 px-2 flex p-1 font-bold gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              Remote, India
            </span> <br />
          </div>

          <h4 className="font-bold">Freelance Developer • May 2023 - May 2024 </h4>

          <h5 className="font-semibold">IzzatCouncil</h5>
          <ul className="flex flex-col gap-3">
            <li>
              • Implemented a LMS web application from scratch and added an Investor console for their investors.
            </li>
            <li>
              • Pages and Investors console were developed using ReactJs and tailwindcss, wordpress was used for LMS.
            </li>
          </ul>

          <h5 className="font-semibold">AMPMKey</h5>
          <ul className="flex flex-col gap-3">
            <li>
              • Implemented a web application for their Brand. 
            </li>
            <li>
              • Implement responsive website using ReactJS,  tailwindcss and deployed in netlify. 
            </li>
          </ul>

      </section>,
    },
    {
      title: 'Frontend Wordpress Developer',
      content: <section className="bg-white/20 rounded-md  w-5/6 p-5 flex flex-col gap-5">
          <div className="flex gap-3">
            <span className="rounded-md border-2 border-white/20 bg-sky-600 px-2 flex p-1 font-bold gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
              Aljoodmedia
            </span>

            <span className="rounded-md border-2 border-white/20 bg-sky-600 px-2 flex p-1 font-bold gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              Remote (India) - Company Based in Turkey
            </span> <br />
          </div>
          <h4 className="font-bold">Frontend Wordpress Developer • May 2021 - May 2022 </h4>
            <ul className="flex flex-col gap-3">
              <li>
                • Built multiple websites for businesses, agencies and Public Speakers.
              </li>
              <li>
                • Implemented responsive stunning  websites using wordpress for their clients and implemented woocommerce for ecommerce websites.
              </li>
              <li>
                • Facilitated in growing the agency from scratch as a founding wordpress developer with the founders. 
              </li>
            </ul>
      </section>,
    },
  ];


  return (
    <>
      <WavyBackground children ={<Hero />} />
      <Slider />
      <About />
      <Skills />
      <Timeline data={experience} />
    </>
  );
}
