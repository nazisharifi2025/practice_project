import { useState } from "react"
import Slider from "./Slider";

export default function Online(){
    const [Online,setOnline] = useState(0);
    useState(()=>{
        const interval = setInterval(() => {
            setOnline(p => p + 1);
        }, 1000);
        return ()=> clearInterval(interval);
    },[])
    return(
        <div className="h-screen w-full relative flex justify-center items-center">
            <Slider/>
            <h1 className="shadow-md shadow-black p-5 absolute bottom-1 right-1 font-bold text-xl">شما {Online}ثانیه است که در این صفحه هستید.</h1>
        </div>
    )
}