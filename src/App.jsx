import { useState } from "react"

function App() {
  const [color,setcolor] =useState("red")
 

  return (
    <>
      <div className="w-full h-screen duration-200"
       style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap
        justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-lg bg-black text-white rounded-full">
            <span className="font-bold">Background Color Changer</span>
        <div className="flex flex-wrap justify-center  gap-3 shadow-lg bg-black text-white px-3 py-2 rounded-full">
          <button
          onClick={()=>setcolor("white")} 
          className="outline-none px-4 text-black" 
          style={{background : "White"}}  >White</button>
          <button 
          onClick={()=>setcolor("black")} 
          className="outline-none px-4 text-white" 
          style={{background : "black"}}  >Black</button>
          <button 
          onClick={()=>setcolor("green")} 
          className="outline-none px-4 text-black" 
          style={{background : "Green"}}  >Green</button>
          <button 
           onClick={()=>setcolor("blue")}
          className="outline-none px-4 text-black" 
          style={{background : "Blue"}}  >Blue</button>
          <button
           onClick={()=>setcolor("orange")}
          className="outline-none px-4 text-black" 
          style={{background : "Orange"}}  >Orange</button>
          <button
           onClick={()=>setcolor("gray")}
          className="outline-none px-4 text-black" 
          style={{background : "Gray"}}  >Gray</button>
          <button
           onClick={()=>setcolor("yellow")}
          className="outline-none px-4 text-black" 
          style={{background : "yellow"}}  >Yellow</button>
          <button 
           onClick={()=>setcolor("lavender")}
          className="outline-none px-4 text-black" 
          style={{background : "lavender"}}  >Lavender</button>

        </div>

        </div>
        
       </div>
       </div>
    </>
  )
}

export default App
