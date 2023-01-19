import { Icon } from "../Icons"
import { useAudio, useFullscreen, useToggle } from "react-use"
import { secondsToTime } from "utils"
import CustomRange from "components/CustomRange"
import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setControls, setCurrent, setPlaying, setSidebar } from "stores/player"
import FullScreenPlayer from "components/FullScreen"

function Player(){

    const fullRef = useRef()

    const [show, toggle] = useToggle()
    const isFullscreen = useFullscreen(fullRef,show,{onClose:()=>toggle(false)})

    const {current, sidebar} = useSelector(state=>state.player)

    const [audio, state, controls, ref] = useAudio({
        src:current?.src,
    })

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setControls(controls))
    },[])
    useEffect(()=>{
        controls.play()
    },[current])
    useEffect(()=>{
        dispatch(setPlaying(state.playing))
    },[state.playing])

    const volumeIcon = useMemo(()=>{
        if(state.volume === 0 || state.muted) {
            return 'soundOffMusic'
        }
        if(state.volume > 0 && state.volume < 0.33) {
            return 'soundLowMusic'
        }
        if(state.volume > 0.33 && state.volume < 0.66) {
            return 'soundMidMusic'
        }
        return 'soundMusic'
  
    },[state.volume,state.muted])

    return(
        <div className="flex px-4 justify-between items-center h-full ">
            <div className="min-w-[11.25rem] w-[30%]">
                {current && (
                <div className="flex items-center">
                    <div className="flex items-center mr-3">
                        {!sidebar && (
                        <div className="w-14 h-14 mr-3 flex-shrink-0 relative group">
                            <img src={current?.image} />
                            <button onClick={()=>dispatch(setSidebar(true))} className="w-6 h-6 bg-black opacity-0 flex items-center justify-center hover:scale-[1.06] rounded-full absolute right-1.5 top-1.5 group-hover:opacity-80 ">
                                <Icon name="up" size="16" />
                            </button>
                        </div>
                        )}
                    <div>
                        <h6 className="text-sm line-clamp-1">{current?.title}</h6>
                        <p className="text-[0.688rem] text-white text-opacity-70 ">{current?.singer}</p>
                    </div>
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="likeMusic" size="16" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="windowMusic" size="16" />
                    </button>
                </div>
                )}
            </div>
            <div className="flex flex-col items-center pt-2 px-4 max-w-[45.125rem] w-[40%]">
                {audio}
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="randomMusic" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="backMusic" />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']} className="bg-white w-8 h-8 flex items-center text-black justify-center text-white rounded-full hover:scale-[1.05]">
                        <Icon size={16} name={state?.playing ? 'playMusic' : 'stopMusic'} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="nextMusic" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="loopMusic" />
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                <div className="text-[0.688rem] text-white text-opacity-70">
                    {secondsToTime(state?.time)}
                </div>
                <CustomRange value={state?.time} max={state?.duration || 1} min={0} step={0.1} onChange={value => controls.seek(value)} />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex justify-end items-center">
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name="listMusic" size="16" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name="connectMusic" size="16" />
                </button>
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
                    <Icon name="fullScreen" size="22" />
                </button>
            </div>
            <div ref={fullRef}>
               {isFullscreen && <FullScreenPlayer volumeIcon={volumeIcon} toggle={toggle} state={state} controls={controls} />}
            </div>
        </div>
    )
}

export default Player