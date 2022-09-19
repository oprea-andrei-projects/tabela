import React from "react";
import Counter from "./Counter";
import Stats from "./Stats";

export default function Header({p}){



    return(
        <>

            <header class="nav">

            <Stats p={p}/>


            <h1 class="title">SCOREBOARD</h1>


            <Counter />


    
            </header>
                    
        
        
        
        
        </>
    )
}