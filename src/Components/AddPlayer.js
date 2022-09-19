import React, { useRef, useState } from "react";

export default function AddPlayer({p,add}){

  

    let inputEl = useRef();

    let generateID = ()=>{

        return Math.floor(Math.random() * 100)
    }


    let handleAddPlayer = ()=>{


        let thePlayer = {name: inputEl.current.value, score: 0, id:{generateID}}

        add(thePlayer);


        console.log(inputEl.current.value);



    }



    return(
        <>

            <footer className="adding">

                <input type="text" className="playerName" ref={inputEl}/>
                <buttor className="addBtn" id="add" onClick={handleAddPlayer}>Add Player</buttor>

            </footer>
        
        
        
        
        </>
    )
}