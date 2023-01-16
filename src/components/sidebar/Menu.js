import { NavLink } from "react-router-dom"
import {Icon} from "../Icons"


export default function Menu() {

    const activeStyle = {
        
    }
    return(
            <nav className="px-2">
                <ul className="flex flex-col">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4 rounded" :"h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded" }>
                            <span>
                                <Icon name="home"/>
                            </span>
                            Ana syfa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Search" className={({isActive}) => isActive ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4 rounded" :"h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded" }>
                            <span>
                                <Icon name="search"/>
                            </span>
                            Ara
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Library" className={({isActive}) => isActive ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4 rounded" :"h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded" }>
                            <span>
                                <Icon name="library"/>
                            </span>
                            Kitaplığım
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}