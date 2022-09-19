import { useRef, useState } from "react";
import React from "react";


export default function Counter(){


    let [theValue, setTheValue] = useState(0);
    let [flag, setFlag] = useState(true);

   

   let handleStart = ()=>{

    if(flag==true){

        setInterval(() => {
            setTheValue(theValue => theValue + 1)
        }, 2000)

    }else if(flag==false){

         setTheValue(0);
    }

   

   }

   let handleReset = ()=>{

        clearInterval(setTheValue(0));
        setFlag(false);
        

   }


    return(

        <div className="timer">

            <p>STOPWATCH</p>
            <p>{theValue}</p>
           

            <div class="stopBtns">
                <button class="btn stopBtn" onClick={handleStart}>START</button>
                <button class="btn resetBtn" onClick={handleReset}>RESET</button>
            </div>
        
        </div>
    )
}