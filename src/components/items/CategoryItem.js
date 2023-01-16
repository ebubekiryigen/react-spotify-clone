import { NavLink } from "react-router-dom"


export default function CategoriItem({item,key}) {
    return(
        <NavLink to="#">
                <div key={key} style={{backgroundColor:item.color}} className="rounded-md before:pt-[100%] relative before:block mt-5">
                    <div className="absolute inset-0 overflow-hidden">
                        <h3 className="p-4 text-2xl tracking-tighter font-semibold ">
                            {item.title}
                        </h3>
                        <img src={item.image} className="shadow-spotifyShadow w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] absolute translate-y-[8%] bottom-0 right-0" />
                    </div>
                </div>
        </NavLink>
    )
}