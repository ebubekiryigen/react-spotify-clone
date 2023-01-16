import { Icon } from "../Icons"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setControls, setCurrent } from "stores/player"


export default function SongItem({item}){

    const dispatch = useDispatch()
    const {current,playing, controls} = useSelector(state=> state.player)

    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full' 
            case 'podcast':
                return 'rounded-xl'   
            default:
                return 'rounded'
        }
    }
    const isCurrentItem = (current?.id === item.id && playing)

    const updateCurrent = () => {
            if(current.id === item.id) {
                if(playing) {
                    controls.pause()
                } else {
                    controls.play()
                }
            }else {
                dispatch(setCurrent(item))
            }
    }
    return(
        <NavLink className={"bg-footer p-4 rounded hover:bg-active group "} key={item.id} to="/">
            <div className="pt-[100%] relative mb-4">
                <img src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} />  
                <button onClick={updateCurrent} className= {`w-10 h-10 rounded-full bg-spotygreen absolute bottom-2 right-2 flex items-center justify-center ${!playing || !isCurrentItem ? 'hidden' : '' } group-hover:flex group-focus:flex `}>
                    <Icon name={isCurrentItem ? 'stop': 'play'} />
                </button>  
            </div>
            <h6 className="line-clamp-1 text-base font-semibold">
                {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
                {item.description}
            </p>
        </NavLink>
    )
}