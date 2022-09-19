import React from "react";


export default function Stats({p}){

    let noOfPlayers = (arr)=>{

        return arr.length;

    }

    let pointsNo = (arr)=>{

        let sum= 0;

        for(let i=0;i<arr.length; i++){

            sum += arr[i].score;
        }

        return sum;
    }

    return(
        <div className="scores">

                <p>PLAYERS:{noOfPlayers(p)}</p>
                <p>TOTAL POINTS:{pointsNo(p)}</p>
        
        
        </div>
    )
}