import Navigation from "./Navigation"
import { Routes, Route, useMatch } from "react-router-dom";
import Profile from "./Profile"
import Search from "./Search";
export default function Navbar() {
    
    const matchRoute = useMatch('/search')

    return(
        <nav className="h-[3.75rem] flex items-center justify-between px-8 bg-black bg-opacity-10">
            <Navigation />
            {matchRoute && (<Search />)}
            <Profile />
        </nav>
    )
}