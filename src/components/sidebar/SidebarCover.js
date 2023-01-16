import { Icon } from "components/Icons"
import { useDispatch, useSelector } from "react-redux"
import { setSidebar } from "stores/player"



export default function SidebarCover() {

    const current = useSelector(state => state.player.current)
    const dispatch = useDispatch()


    return (
        <div className="pt-[100%] relative bg-black group">
            <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" />
            <button onClick={()=>dispatch(setSidebar(false))} className="rotate-180 w-6 h-6 bg-black opacity-0 flex items-center justify-center hover:scale-[1.06] rounded-full absolute right-1.5 top-1.5 group-hover:opacity-80 ">
                <Icon name="up" size="16" />
            </button>
        </div>
    )
}