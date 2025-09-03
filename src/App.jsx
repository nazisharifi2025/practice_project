import React, { useState } from "react"
import Clock from "./Componnent/Clock"
import Search from "./Componnent/search"
import Online from "./Componnent/Online"

function App() {
  // const [islog,setislog] = React.useState(false);
  // return(
  //   <div>
  //     {islog? (
  //     <Clock/>
  //     ):(
  //     <Search/>
  //     )
  //   }
    // </div>
    
  // )
  return(
    <div>
      <Online/>
    </div>
  )
}

export default App
