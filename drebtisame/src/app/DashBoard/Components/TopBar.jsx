import { Globe , Bell ,User  } from "lucide-react"
import SearchBar from "./SearchBar"
import Link from "next/link"
import Image from "next/image"
import avatar from "../../../../public/user/avatar.png"
const TopBar=()=>{
    return(
        <header className="w-full h-fit flex pb-5 ">
            <SearchBar/>
            <ul className="actions flex flex-1 items-center justify-center lg:justify-end p-2 gap-5 md:gap-10 ">
                <li className="md:size-16 size-12 bg-[var(--lg)] rounded-full flex justify-center items-center overflow-hidden  shadow-[var(--shadow-1)]"><Image src={avatar} className="md:h-16 h-12 object-contain" ></Image></li>
                <li className="md:size-16 size-12 bg-[var(--lg)] rounded-full flex justify-center items-center shadow-[var(--shadow-1)]"><Link href="/DashBoard"> <Globe size={32}/> </Link></li>
                <li className="md:size-16 size-12 bg-[var(--lg)] rounded-full flex justify-center items-center shadow-[var(--shadow-1)]"><Link href="/DashBoard">  <Bell size={32}/></Link></li>
            </ul>
        </header>
    )
}
export default TopBar