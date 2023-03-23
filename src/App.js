import React  from "react";
import "./App.css";
import Class from "./Component/Class/Class";
import Function from "./Component/Function/Function";
import { useState } from "react";

const App = () => {
  const hs = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    textShadow: "2px 2px 4px #000000",
  };
  const[data, setData]=useState(false)
  const[datac, setDatac]=useState(false)

  const result=()=>{
    setData(!data)
  }

  const resultClass=()=>{
    setDatac(!datac)
  }

  return (
    <>
      <div className="app">
        <div>
          <h1 style={hs}>Styling using Function and Class Component</h1>
        </div>
        <div className="btn-div">
          <button className="btn btn1" onClick={result}>
            To see styling in fuctional Component
          </button>
         {data? <Function />:null }

          <button className="btn btn2" onClick={resultClass}>
            To see styling in class Component
          </button>
          {datac? <Class />:null }
        </div>
        
        
      </div>
    </>
  );
};

export default App;
