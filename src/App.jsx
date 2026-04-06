import { useState } from "react"

function App() {
  const [color,setcolor] =useState("red")
 

  return (
    <>
      <div className="w-full h-screen duration-200"
       style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap
        justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-col items-center shadow-lg bg-gray-300 text-black rounded-3xl px-6 py-3">
            <div className="font-bold mb-2">Background Color Changer</div>
        <div className="grid grid-cols-3  gap-3 ">
          <button
          onClick={()=>setcolor("white")} 
          className="outline-none px-4 py-1 text-black" 
          style={{background : "White"}}  >White</button>
          <button 
          onClick={()=>setcolor("black")} 
          className="outline-none px-4 py-1 text-white" 
          style={{background : "black"}}  >Black</button>
          <button 
          onClick={()=>setcolor("green")} 
          className="outline-none px-4 py-1 text-black" 
          style={{background : "Green"}}  >Green</button>
          <button 
           onClick={()=>setcolor("blue")}
          className="outline-none px-4 py-1 text-black" 
          style={{background : "Blue"}}  >Blue</button>
          <button
           onClick={()=>setcolor("orange")}
          className="outline-none px-4 py-1 text-black" 
          style={{background : "Orange"}}  >Orange</button>
          <button
           onClick={()=>setcolor("gray")}
          className="outline-none px-4 py-1  text-black" 
          style={{background : "Gray"}}  >Gray</button>
          <button
           onClick={()=>setcolor("yellow")}
          className="outline-none px-4 py-1 text-black" 
          style={{background : "yellow"}}  >Yellow</button>
          <button 
           onClick={()=>setcolor("lavender")}
          className="outline-none px-4 py-1  text-black" 
          style={{background : "lavender"}}  >Lavender</button>
          <button 
           onClick={()=>setcolor("red")}
          className="outline-none px-4 py-1  text-black" 
          style={{background : "red"}}  >Red</button>

        </div>

        </div>
        
       </div>
       </div>
    </>
  )
}

export default App
