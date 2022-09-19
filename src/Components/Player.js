import React from "react";
import Punctaj from "./Punctaj";

export default function Player({player, changeS, deleteP}){


    let handleDelete = ()=>{


        deleteP(player);

    }


    return(

        <>

   

                <div class="cutie">

                 
                    <span className="deletePlayer" onClick={handleDelete}>X</span>

                    <span class="name">{player.name}</span>

                   <Punctaj  id={player.id}  changeScore={changeS}  score={player.score}  />

                </div>

         
        
        
        </>
    )
}