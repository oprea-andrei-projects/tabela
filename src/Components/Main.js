import React from "react";
import Player from "./Player";

export default function Main({p,changeScore,deleteJucator}){

    


    return(

        <main className="boxes">

            {

                p.length==0
                ?
                (
                    <p>Loading...</p>
                )
                :
                p.map(element=>{
                    

                    return <Player player={element} changeS={changeScore} deleteP= {deleteJucator} />
                })


            }

           

        </main>
    )
}