import { NavLink } from "react-router-dom"
import SongItem from "./songItem"
import CategoriItem from "./CategoryItem.js"
import UserFavCategories from "./UserFavCategories"
import ScrollContainer from "react-indiana-drag-scroll"
import { useEffect, useRef, useState } from "react"
import { Icon } from "components/Icons"


const ItemSterio = ({title,link=false, elementItem}) => {
    return(
        <section>
            <header className="flex items-center justify-between mb-4">
                <NavLink to={link}>
                    <h3 className="text-2xl text-wihte font-semibold tracking-tight hover:underline ">{title}</h3>
                </NavLink>
                {link && (
                    <NavLink to={link} className={"text-xs font-semibold uppercase text-link hover:underline tracking-wider "} > Hepsini Göster </NavLink>
                )}
            </header>
            <div className="grid grid-cols-5 gap-x-6">
                {elementItem && elementItem.map((item,index)=><SongItem item={item} key={index} />) }
            </div>
        </section>
    )
}

const ItemCategory = ({title,link=false, elementItem}) => {
    return(
        <section>
            <header className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-wihte font-semibold tracking-tight ">{title}</h3>
            </header>
            <div className="grid grid-cols-5 gap-6 scroll-smooth">
                {elementItem && elementItem.map((item,index)=><CategoriItem item={item} key={index} />) }
            </div>
        </section>
    )
}

const ItemUserFavCategories = ({title,link=false, elementItem}) => {

    const favRef = useRef()
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    useEffect(()=>{
        if(favRef.current){
            const scrollHandle = () => {
                const isEnd   = favRef.current.scrollLeft + favRef.current.offsetWidth === favRef.current.scrollWidth
                const isBegin = favRef.current.scrollLeft === 0 
                setPrev(!isBegin)
                setNext(!isEnd)
            }
            scrollHandle()
            favRef.current.addEventListener('scroll',scrollHandle)
        }
    },[favRef])

    const scrollFavNext = () => {
        favRef.current.scrollLeft += favRef.current.offsetWidth - 200
    }
    const scrollFavPrev = () => {
        favRef.current.scrollLeft -= favRef.current.offsetWidth - 200
    }

    return(
        <section className="mb-8">
            <header className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-wihte font-semibold tracking-tight ">{title}</h3>
            </header>
            <div className="relative">
                {prev && <button className="w-12 absolute z-10 -left-6 h-12 rounded-full hover:scale-[1.06] top-1/2 -translate-y-1/2 bg-white text-black flex items-center justify-center"  onClick={scrollFavPrev}><Icon name="pre" size="24" /></button>}
                {next && <button className="w-12 h-12 z-10 absolute -right-6 rounded-full hover:scale-[1.06] top-1/2 -translate-y-1/2 bg-white text-black flex items-center justify-center" onClick={scrollFavNext}><Icon name="next" size="24" /></button>}
                <ScrollContainer innerRef={favRef} className="flex overflow-x scroll-smooth gap-x-6">
                    {elementItem && elementItem.map((item,index)=><UserFavCategories item={item} key={index} />) }
                </ScrollContainer>
            </div>
        </section>
    )
}

const ContentItem = ({name,title,link=false, elementItem}) => {
    const item = {
        sterio   : ItemSterio,
        category : ItemCategory,
        user     : ItemUserFavCategories,
    }
    const Component = item[name]
    return <Component title={title} link={link} elementItem={elementItem} />
}

export {
    ContentItem
}