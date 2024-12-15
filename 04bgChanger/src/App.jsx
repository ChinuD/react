import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
  <div className="w-full h-screen duration-200"
  style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-6 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button onClick={() => setColor("Red")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "red"}}>
          Red
        </button>
        <button onClick={() => setColor("Yellow")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "yellow"}}>
          yellow
        </button>
        <button onClick={() => setColor("green")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "green"}}>
          green
        </button>
        <button onClick={() => setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "blue"}}>
          blue
        </button>
        <button onClick={() => setColor("violet")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "violet"}}>
          Violet
        </button>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
