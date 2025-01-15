import { useState } from "react";
import Link from "../link/Link"
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 1, path: '/', name: "home"},
        {id: 2, path: '/about', name: "about"},
        {id: 3, path: '/services', name: "services"},
        {id: 4, path: '/contact', name: "contact"},
        {id: 5, path: '/blog', name: "blog"}
    ]
  return (
    <nav>
        <div className="md:hidden cursor-pointer text-2xl bg-slate-200 px-8 pt-8 pb-4 text-black" onClick={()=>setOpen(!open)}>
            {
                open===true ? <IoCloseSharp /> : <IoMdMenu></IoMdMenu>
            }

        </div>
        <ul className={`md:flex gap-6 bg-slate-200 duration-1000 p-8 text-black ${open ? '' : 'hidden'}`}>
        { 
            routes.map( route=> <Link key={route.id} route={route}></Link> )
        }
        </ul>
    </nav>
  )
}
