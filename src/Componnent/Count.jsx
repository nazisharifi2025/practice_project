import { act, useReducer } from "react"

export default function Count(){
    const [valio,despath] = useReducer(reduse,{Number : 0 , click : 0});
    function reduse(valio , action){
        if(action.type === "inc"){
          return  {...valio,Number:valio.Number + action.paylod ,click: valio.click + action.paylod};
        }else if(action.type === "dec"){
            return  {...valio,Number:valio.Number - action.paylod ,click: valio.click + action.paylod};
        }
    }
    return(
        <div>
            <h1 className="font-bold text-xl border-b border-gray-200 mb-6">the number of {valio.Number} and the total number is {valio.click}</h1>
            <button className="px-4 py-2 bg-gray-200 shadow-md shadow-gray-400 mx-3" onClick={()=> despath({type : "inc" , paylod : 1})}>increment</button>
            <button className="px-4 py-2 bg-gray-200 shadow-md shadow-gray-400 mx-3" onClick={()=> despath({type : "dec" , paylod : 1})}>decrement</button>
        </div>
    )
}