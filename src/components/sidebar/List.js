
const List = () =>{
    return(
        <div className="mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-opacity-20 border-white ">
            <ul>
                {new Array(40).fill(
                      <li>
                      <a href="#" className="text-customR08 text-link hover:text-white flex h-8 items-center">
                          Ebubekirin Çalma Listesi
                      </a>
                  </li>
                )}
            </ul>
        </div>
    )
}

export default List