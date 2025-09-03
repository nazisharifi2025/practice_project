import { useEffect, useState } from "react"

export default function Slider(){
    // slider 1
    const [Slider,setSlider] = useState([
        {
            img : "/img/i1.jpg",
        },
        {
            img : "/img/i2.png",
        },
        {
            img : "/img/i3.webp",
        }
    ]);
    const [curentindex,setcurentindex] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            setcurentindex((index)=> (index + 1) % Slider.length)
        }, 3000);
        return ()=> clearInterval(interval);
    },[Slider.length]);
    // Slide 2
      const [Slider2,setSlider2] = useState([
        {
            imge : "/img/i4.jpg",
        },
        {
            imge : "/img/i5.jpg",
        },
        {
            imge : "/img/i6.webp",
        }
    ]);
    const [indexfit,setindexfit] = useState(0);
    useEffect(()=>{
        const setint = setInterval(()=>{
            setindexfit((ind)=> (ind + 1) % Slider2.length);
        },3000)
        return ()=> clearInterval(setint);
    },[Slider2.length])
    return(
        // slider1
        <div className="w-full h-full flex justify-center items-center gap-12">
        <div className="h-[70%] w-[30%] overflow-hidden">
            <img src={Slider[curentindex].img} className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
        </div>
        {/* slidr2 */}
         <div className="h-[70%] w-[30%] overflow-hidden">
            <img src={Slider2[indexfit].imge} className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
        </div>
        </div>
    )
}