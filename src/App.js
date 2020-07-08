import React, {useState} from 'react';
import Message from './message';
import './App.css';



function App() {


  let [count , setCount] = useState(0);

  let [isMorning , setMorning] = useState(true);




  return (

   <div className = { `box ${isMorning ? 'daylight' : ''}`}  >


   <h3> Day time is { isMorning ? 'Day' : 'Night'   } </h3>

     <Message counter = {count} />
  
   
   <br/> 

   <button onClick = { ()=> setCount(count = count+1) } > Update Counter</button>
    <br></br>
   <button onClick = { ()=> setMorning( !isMorning )}   >Change Day Time</button>
   </div>

  );
}

export default App;
