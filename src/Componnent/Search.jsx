import React, { useState } from "react";
import {product} from "./object-sea";
export default function Search(){
    const [search,setSearch] = useState("");
    const filterpro = product.filter((pro)=>
    pro.name.toLocaleLowerCase ().includes(search.toLocaleLowerCase())
    );
    return(
        <div className="h-screen w-full flex flex-col items-center gap-12  py-12">
            <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="Search" className="w-[50%] outline-0 rounded-full border mx-auto py-2 px-3" />
            <div className="w-[80%] mx-auto h-full px-4 flex justify-between gap-16 flex-wrap">
                {filterpro.map((pro,index)=>(
                <div  key={index} className="h-[70%] w-[250px] border gap-3 border-gray-200 flex flex-col items-center justify-center p-4">
                    <h1 className="text-5xl">{pro.emoji}</h1>
                    <p className="text-2xl">{pro.name}</p>
                    <p className="text-center">{pro.des}</p>
                </div>
                ))}
            </div>
        </div>
    )
}