import { useSelector } from "react-redux"
import { Icon } from "./Icons"
import { secondsToTime } from "utils"
import CustomRange from "components/CustomRange"


export default function FullScreenPlayer({toggle,state,controls,volumeIcon}){


    const {current} = useSelector(state=>state.player)

    return(
        <div className="h-full relative">
            <div className="absolute inset-0 object-cover bg-center bg-cover blur-xl opacity-40" style={{backgroundImage:`url(${current.image})`}}>
            </div>
            <div className="absolute top-10 left-10 text-white flex items-center gap-x-5 opacity-70">
                <Icon name="logoFull" size="38" />
                <div>
                    <p>PLAYING FROM PLAYLIST</p>
                    <h6 className="font-semibold mt-2 uppercase">{current.title}</h6>
                </div>
            </div>
            <div className="absolute bottom-24 left-10 flex items-center gap-x-5" >
                <img src={current.image} className="w-24 h-24 object-cover" />
                <div>
                    <h3 className="text-3xl font-semibold">{current.title}</h3>
                    <h3 className="text-base font-semibold opacity-50">{current.singer}</h3>
                </div>
            </div>
            <div className="flex flex-col items-center w-full absolute bottom-0">
                <div className="w-full flex items-center gap-x-2 pl-10 pr-10 ">
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange value={state?.time} max={state?.duration || 1} min={0} step={0.1} onChange={value => controls.seek(value)} />
                        <div className="text-[0.688rem] text-white text-opacity-70">
                            {secondsToTime(state?.duration)}
                        </div>
                </div>
                <div className="flex justify-between items-center w-full pl-10 pr-10 ">
                    <div className="flex items-center gap-x-5 mx-auto">
                        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="randomMusic" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={24} name="backMusic" />
                        </button>
                        <button onClick={controls[state?.playing ? 'pause' : 'play']} className="bg-white w-16 h-16 flex items-center text-black justify-center text-white rounded-full hover:scale-[1.05]">
                            <Icon size={24} name={state?.playing ? 'playMusic' : 'stopMusic'} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={24} name="nextMusic" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={24} name="loopMusic" />
                        </button>
                        <div className="flex items-center gap-x-3 absolute bottom-4 right-10">
                        <button onClick={controls[state.muted ? 'unmute' : 'mute']} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon name={volumeIcon} size="16" />
                        </button>
                            <div className="w-[5.813rem] max-w-full ">
                            <CustomRange 
                            value={state.muted ? 0 : state?.volume} 
                            max={1} 
                            min={0} 
                            step={0.01} 
                            onChange={value => {
                                controls.unmute()
                                controls.volume(value)
                            }} 
                            />
                            </div>
                            <button
                            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
                            onClick={()=>toggle()}
                            >
                                <Icon name="offFull" size="24" />
                            </button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}