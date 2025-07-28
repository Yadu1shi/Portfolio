import { Icon } from "@iconify/react"
import Image from "next/image"

export default function Work(){

    const cards=[
      {image:"/bike-rental.png",title:"Bike Rental landing page" ,description:"This is a modern and responsive Bike Rental Landing Page. the design focuses on speed, mobile responsiveness, and clean visual"},
      {image:"/music-app.png",title:"Music Streaming App" ,description:"A sleek music with real-time playback favorites lists, and API integration  using JioSaavn. Built using React, Tailwind and Zustand "},
      {image:"/movie-app.png",title:"Movie Search App" ,description:"Search movies with ratings using the OMDB API. Clean UI, dark mode supported, and responsive design with search filters."},
      {image:"/weather-app.png",title:"Weather App" ,description:"A sleek weather app that fetches real-time weather data from OpenWeatherMap API with animated icons and location search support."},
      {image:"/news-app.png",title:"News App" ,description:"Fetch and display latest headlines across various categories. Built using NewsAPI and styled for readability and speed."},
    ]
   

    return(
      <div className="min-h-[850px] md:min-h-screen w-full flex flex-col items-center justify-start gap-6 md:gap-8 px-6 md:px-10 py-16 ">
          <div className="min-w-96 md:w-full min-h-24 flex flex-col items-center justify-around"><h1 className="text-primary text-center font-heading font-bold text-4xl md:text-6xl">MY WORK</h1><p className="text-base font-subheading text-secondary text-center">A glimpse into real-world apps i designed and developed</p></div>
          <div className="w-full max-h-[484px]"><div className="h-full min-w-[360px] md:w-full px-4 py-3 flex items-center justify-start  overflow-auto gap-6">
            
            {cards.map((card,index)=>(
            <div key={index} className="h-[460px] w-full flex flex-col bg-[#1a1a1a] rounded-3xl border  justify-around items-center gap-6 p-4"><Image src={card.image} alt={`card${index+1}`} height={180} width={280} className="object-cover h-[180px] w-[320px] border rounded-xl"/><h1 className=" text-center text-primary text-lg font-heading font-semibold">{card.title}</h1><p className="text-base text-center font-subheading text-secondary"> {card.description}  </p>
          <div className="w-full flex justify-evenly h-5"><Icon icon="skill-icons:react-light" width="16" height="16" /><Icon icon="vscode-icons:file-type-next" width="16" height="16" /> <Icon icon="simple-icons:express" width="16" height="16" /><Icon icon="skill-icons:mongodb" width="16" height="16" /><Icon icon="fa6-brands:node" width="20" height="16" /><Icon icon="skill-icons:tailwindcss-light" width="16" height="16" /><Icon icon="logos:vercel" className="bg-white px-1" width="50" height="12" /></div><div className="h-9 w-64 flex justify-between gap-3 items-center"> <button className="w-[130px] h-[34px]  bg-[#000000] text-xs text-center whitespace-nowrap flex justify-center place-items-center font-montserrat">CODE<Icon icon="mdi:keyboard-arrow-right" width="20" height="24" /></button><button className="w-[130px] h-[34px]  bg-[#000000] text-xs text-center whitespace-nowrap flex justify-center place-items-center font-montserrat">LIVE DEMO<Icon icon="mdi:keyboard-arrow-right" width="20" height="24" /></button> </div></div>
                 ) )}
              </div>
          </div>
          <h1 className="text-center text-sm md:text-2xl font-source text-secondary font-thin italic">Let’s Collaborate</h1>
      </div>
    )
}