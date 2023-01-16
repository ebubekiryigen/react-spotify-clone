import { NavLink } from "react-router-dom"


export default function CategoriItem({item,key}) {
    return(
        <NavLink to="#">
                <div 
                key={key} 
                style={{backgroundColor:item.color}} 
                className="rounded-lg flex-shrink-0 relative mt-5 w-[27.375rem] h-[13.75rem] ">
                    <div className="absolute inset-0 overflow-hidden">
                        <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold ">
                            {item.title}
                        </h3>
                        <img src={item.image} className="shadow-spotifyShadow w-32 h-32 rotate-[25deg] translate-x-[18%] absolute translate-y-[8%] bottom-0 right-0" />
                    </div>
                </div>
        </NavLink>
    )
}