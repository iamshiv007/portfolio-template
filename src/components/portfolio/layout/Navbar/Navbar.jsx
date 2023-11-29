import React from "react"
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return(
        <navbar className="p-4 bg-transparent flex justify-between absolute top-0 left-0 right-0 z-10">
            <a href="#" className="text-xl text-white font-semibold">Mrikon</a>
            <button className="text-3xl text-white"><RxHamburgerMenu/></button>
        </navbar>
    )
}

export default Navbar