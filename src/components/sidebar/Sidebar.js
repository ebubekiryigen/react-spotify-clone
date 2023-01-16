import logo from "../../public/img/logo.svg"
import Menu from "./Menu"
import SideBarImage from "./SidebarImage"
import List from "./List"
import Download from "./Download"
import { useSelector } from "react-redux"
import SidebarCover from "./SidebarCover"

export default function Sidebar() {

    const sidebar = useSelector(state=> state.player.sidebar)

    return(
        <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
            <a href="#" className="px-6 mb-7">
                <img src={logo} className="h-10" />
            </a>
            <Menu />
            <SideBarImage />
            <List />
            <Download />
            {sidebar && (
                <SidebarCover />
            )}
        </aside>
    )
}