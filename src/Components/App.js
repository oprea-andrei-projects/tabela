import React, { useState } from "react";
import AddPlayer from "./AddPlayer";
import Header from "./Header";
import Main from "./Main";


function App() {


  let [players, setPlayers] = useState( [{ name: "Guil", score: 0, id: 1 }, { name: "Treasure", score: 0, id: 2 }, { name: "Ashley", score: 4, id: 3 }, { name: "James", score: 8, id: 4 }]);

  let [x, setX] = useState(0);

  let updateScore = (id, newScore)=>{

     let arr=[...players];

    for(let i=0; i<arr.length; i++){

      if(arr[i].id == id){

        arr[i].score += newScore;
        
      }


    }
    setPlayers(arr);

  }

  let addThePlayer = (p)=>{

    let arr = [...players];

    arr.push(p);

    setPlayers(arr);

  }

  let deleteDasPlayer = (p)=>{

    let arr = [...players];

    arr = arr.filter(e=>e.id!=p.id);

    setPlayers(arr);


  }

  let incrementor = (x) =>{

    setX(x++);

  }

 
 


  return (



    <>

      <Header p={players} ></Header>
      <Main p={players} changeScore={updateScore} deleteJucator={deleteDasPlayer}></Main>
      <AddPlayer p={players} add={addThePlayer}></AddPlayer>
      
    
    
    </>

      
      
    
    
    
    





  );
}

export default App;
