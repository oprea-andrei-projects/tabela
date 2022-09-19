import React from "react";

export default function Punctaj({id,changeScore,score}){


  

    return(


        <>

            <div class="punctaj">

            <span class="minus" onClick={()=>{
                 changeScore(id,-1);
            }}>-</span>

            
            <span class="noPoints">{score}</span>


            <span class="plus" onClick={()=>{
                 changeScore(id,1);
            }}>+</span>

            </div>
        
        
        
        </>
    )



}