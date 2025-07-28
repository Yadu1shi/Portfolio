import { Icon } from "@iconify/react"

export default function Hero(){
    return(
      <div className="min-h-[850px] mx-auto w-full flex flex-col items-center justify-start gap-6 px-8 py-16 md:py-4 ">
          <div className="flex justify-between px-2 items-center  border-[1.5px] border-border rounded-full min-h-[60px] min-w-[280px] md:max-w-7xl"><div className="h-10 min-w-[127px] flex items-center" ><span><Icon icon="mage:location-pin" width="24" height="24" /></span><p className="text-white font-subheading">Gwl, India</p></div><div className="w-30 h-14 flex justify-center items-center"><button className="w-[100px] h-10 font-Lato font-bold bg-white border rounded-full text-black gap-2 px-4 py-3 text-md flex justify-center items-center">HIRE ME</button></div></div>
          <div className="min-w-[330px] md:w-[800px]  md:min-h-[300px] min-h-[500px] mx-auto flex flex-col justify-around  items-center  "><div className="min-h-[300px] min-w-full flex flex-col  justify-around md:justify-center md:gap-2 text-subheading "><p className="text-secondary font-source text-left font-thin text-[24px] italic">Hey, i’m</p><h1 className="text-primary font-bold font-montserrat  text-[80px] md:text-8xl text-center">RAHUL YADAV</h1><p className="text-secondary font-source text-center font-thin text-2xl italic">Full stack developer and ui/ux designer</p></div><div className="w-64 h-14 flex gap-4 justify-center"><button className="w-42 h-14 flex justify-center items-center px-6 py-3 border-[2px] rounded-full  text-sm font-heading">Download CV</button><button className="w-17 h-14 flex justify-center items-center px-3 py-3 border-[2px] rounded-full  text-sm font-heading">Work</button></div></div>
          <Icon icon="radix-icons:double-arrow-down" width="20" height="20" />
      </div>
    )
}