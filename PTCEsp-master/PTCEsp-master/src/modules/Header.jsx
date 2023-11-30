import React from "react";
import { Link } from 'react-router-dom'

function Header(h){
    return(
        <div className="bg-[#1a1a1a]">
            <div>
                <ul className="flex flex-row gap-8 py-8 px-4">
                    <Link to="/" className="my-auto"><li ><h1 className="uppercase text-white text-lg">El Salvador</h1></li></Link>
                    <Link to={h.ref1} className="my-auto"><li ><h2 className="uppercase text-[rgba(255,255,255,0.5)] text-sm hover:text-white">{h.item1}</h2></li></Link>
                    <Link to={h.ref2} className="my-auto"><li ><h2 className="uppercase text-[rgba(255,255,255,0.5)] text-sm hover:text-white">{h.item2}</h2></li></Link>
                    <Link to={h.ref3} className="my-auto"><li ><h2 className="uppercase text-[rgba(255,255,255,0.5)] text-sm hover:text-white">{h.item3}</h2></li></Link>
                    <Link to={h.ref4} className="my-auto"><li ><h2 className="uppercase text-[rgba(255,255,255,0.5)] text-sm hover:text-white">{h.item4}</h2></li></Link>
                    <Link to={h.ref5} className="my-auto"><li ><h2 className="uppercase text-[rgba(255,255,255,0.5)] text-sm hover:text-white">{h.item5}</h2></li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;