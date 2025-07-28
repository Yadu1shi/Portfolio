import { Icon } from "@iconify/react"
import Image from "next/image"

export default function Footer(){
    return(
      <div className="min-h-[180px] w-full flex flex-col items-center bg-card justify-center gap-4 px-6 md:px-10 border-border border-t-2 rounded-t-3xl  ">
          <div className="min-w-[250px] md:w-[500px] min-h-[72px] flex justify-around items-center border-b-2 border-secondary py-6"><Icon icon="mdi:linkedin" width="24" height="24" /><Icon icon="mdi:github" width="24" height="24" /><Icon icon="ic:baseline-discord" height="24" width="24" /><Icon icon="material-symbols:mail-outline" height="24" width="24" /><Icon icon="ic:baseline-whatsapp" height="24" width="24" /><Icon icon="mdi:instagram" height="24" width="24" /><Icon icon="prime:twitter" height="20" width="20" /></div>

          <small className="text-secondary font-subheading text-center ">  © {new Date().getFullYear()} Rahul |<span className="hidden md:inline"> all rights reserved |</span> Built with love 💙 in India</small>

      </div>
    )
}