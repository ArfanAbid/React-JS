import { useState } from "react";
import "./App.css";

function App() {
  const [color,setColor]=useState("olive")

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className="w-full h-screen duration-200 bg-slate-800 " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button className="border-2 bg-red-600 border-green-400 rounded-xl " onClick={() =>setColor("red")}>Red</button>
          <button className="border-2 bg-green-600 border-green-400 rounded-xl " onClick={() =>setColor("green")}>Green</button>
          <button className="border-2  bg-blue-600 border-green-400 rounded-full " onClick={() =>setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
