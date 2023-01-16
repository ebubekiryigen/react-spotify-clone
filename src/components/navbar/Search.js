import { Icon } from "components/Icons";


export default function Search(){
    return(
        <div className="mr-auto ml-4 relative">
            <label htmlFor="searcg-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
                <Icon name="search" size="24" />
            </label>
            <input autoFocus={true} type="text" className="h-10 pl-10 outline-none bg-white rounded-3xl placeholder-black/80 text-black text-sm max-w-full w-[22.75rem]" placeholder="Ne dinlemek istiyorsun ?" />
        </div>
    )
}

