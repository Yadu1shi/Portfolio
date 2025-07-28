import { Icon } from "@iconify/react"
import Image from "next/image"

export default function About(){
    return(
      <div className="min-h-[850px] w-full flex flex-col items-center justify-start gap-4 md:gap-1 px-6 md:px-24 py-16 ">
          <div className="h-52 w-52 border-[1.5px] flex justify-center rounded-full border-border" ><Image src={"/download.png"} alt="hero" height={200} width={200}  className=" rounded-full w-40 h-52 object-cover "/></div>
          <div className="min-h-[494px] min-w-[344px] w-full flex flex-col justify-between md:justify-normal md:gap-4 items-center"><h1 className="font-heading text-3xl md:text-5xl text-primary">Yaduvanshi rahul</h1> <p className="font-source text-secondary text-center italic font-thin">“Front-end finesse meets back-end logic — I bring both to the table with clean code and creative energy.”</p><p className="font-subheading text-secondary text-center w-full min-w-[292px]">A passionate Front-End Developer with a knack for crafting clean UI, smooth animations, and real-world web apps. Currently building polished UI with Next.js + Tailwind and designing pixel-perfect mockups in Figma.</p>
          <p className="font-space text-center text-secondary min-w-48 w-full text-base"><span className="font-semibold text-primary">What i know:</span> JavaScript · React · Node.js · Tailwind · MongoDB · Next · Figma</p><button style={{boxShadow:"-4px 4px 0 white"}} className="text-sm w-[130px] h-12 flex justify-center items-center border-2 shadow-white drop-shadow-2xl shadow-inner  border-border">Read more <span className="pl-2"><Icon icon="ri:arrow-right-down-line" width="16" height="16" /></span></button></div>

      </div>
    )
}