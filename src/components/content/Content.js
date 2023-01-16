import Navbar from "../navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import Home from "../../page/Home"
import Search from "../../page/Search"
import Library from "../../page/Library"


export default function Content() {
    return(
        <main className="flex-auto overflow-auto">        
            <Navbar />
            <div className="px-8 py-5">
                <Routes>
                    <Route exact path="/" element={ <Home />} />
                    <Route exact path="/search" element={  <Search />}  />
                    <Route exact path="/library" element={ <Library />}  />
                </Routes>
            </div>
        </main>
    )
}