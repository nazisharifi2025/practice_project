import { useEffect, useReducer, useState } from "react"

export default function Slider(){
    // slider 1
    const [Slider,setSlider] = useState([
        {
            img : "/img/i7.webp",
        },
        {
            img : "/img/i8.jpg",
        },
        {
            img : "/img/i9.jpg",
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
            imge : "/img/i10.webp",
        },
        {
            imge : "/img/i11.webp",
        },
        {
            imge : "/img/i12.jpg",
        }
    ]);
    const [indexfit,setindexfit] = useState(0);
    useEffect(()=>{
        const setint = setInterval(()=>{
            setindexfit((ind)=> (ind + 1) % Slider2.length);
        },3000)
        return ()=> clearInterval(setint);
    },[Slider2.length])
    // buttons 
   // قبلاً تعریف شده:
const [curentindex1, setcurentindex1] = useState(0);
const [indexfit1, setindexfit1] = useState(0);

// تابع برای رفتن به عکس بعدی
const goNext = () => {
    setcurentindex1((prev) => (prev + 1) % Slider.length);
    setindexfit1((prev) => (prev + 1) % Slider2.length);
};

// تابع برای رفتن به عکس قبلی
const goPrev = () => {
    setcurentindex1((prev) => (prev - 1 + Slider.length) % Slider.length);
    setindexfit1((prev) => (prev - 1 + Slider2.length) % Slider2.length);
};

    return(
        // slider1
        <div className="w-full h-full flex  justify-center items-center gap-12">
            {/* button 1 start */}
                <button onClick={goPrev} className="px-2 py-6 relative group shadow-md shadow-gray-400 text-white hover:text-gray-600 bg-gray-300">
                <span className="material-symbols-outlined z-50">
arrow_back_ios
</span>
<div className="h-12 w-full bg-white absolute bottom-0 left-0 bg-clip group-hover:h-20 z-10  group-hover:no-clip"></div>
            </button>
            {/* button 2 endded */}
            {/* slide 1 */}
        <div className="h-[70%] w-[30%] overflow-hidden">
            <img src={Slider[curentindex1].img} className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
        </div>
        {/* slidr2 */}
        
         <div className="h-[70%] w-[30%] overflow-hidden">
            <img src={Slider2[indexfit1].imge} className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
        </div>
        {/* button 1 start */}
     <button onClick={goNext} className="px-2 py-6 relative group shadow-md shadow-gray-400 text-white hover:text-gray-600 bg-gray-300">
                <span className="material-symbols-outlined z-50">
arrow_forward_ios
</span>
<div className="h-12 w-full bg-white absolute bottom-0 left-0 bg-clip group-hover:h-20 z-10  group-hover:no-clip"></div>
            </button>
        {/*button 2 endded  */}
        </div>
    )
}