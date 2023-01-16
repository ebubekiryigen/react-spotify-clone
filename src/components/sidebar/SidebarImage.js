import {Icon} from "../Icons"

const SideBarImage = () => {
    return(
        <nav className="mt-6">
            <ul>
                <li>
                    <a href="#" className="py-2 px-6 flex  items-center group text-link font-semibold hover:text-white">
                        <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white rounded-sm text-black bg-opacity-70 group-hover:bg-opacity-100">
                            <Icon name="list" size="12"  />
                        </span>
                        Çalma Listesi Oluştur
                    </a>
                </li>
                <li>
                    <a href="#" className="py-2 px-6 flex group items-center text-link font-semibold hover:text-white ">
                        <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm opacity-70 group-hover:opacity-100 ">
                            <Icon name="like" size="12"  />
                        </span>
                        Beğenilen Şarkılar
                    </a>
                </li>
            </ul>
        </nav>
    ) 
}

export default SideBarImage