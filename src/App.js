import React from 'react'
import './App.css';

function App() {
  const [time, setTimer] =React.useState(0)
  const [timerOn, setTimerOn] = React.useState(false)

// use effect hook it takes function as well as array
// function run as soon as the component is render and run anytime when timer is on
  React.useEffect(() => {
    let interval = null;

    if(timerOn){
      interval = setInterval(()=>{
        setTimer(prevTime => prevTime + 10)
      },10)//number of milisecond
    } else{
      clearInterval(interval)
    }

    return () => clearInterval(interval); //clean up

  }, [timerOn])

  return (
    <div className="App">
      <div>
        <table>

        {/* 100th of sec 99 back to zero so %100*/}
        <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time/10) % 100)).slice(-2)}</span>
        </table>
        
      </div>
      <div>
        {!timerOn &&  time ===0 &&(
          <button onClick = {()=>setTimerOn(true)}>Start</button>
        )}
        {timerOn && (
          <button onClick = {()=>setTimerOn(false)}>Stop</button>
        )}
        {!timerOn && time !== 0 &&(
          <button onClick = {()=>setTimerOn(true)}>Resume</button>
        )}
        {!timerOn && time>0 &&(
          <button onClick = {()=> setTimer(0)}>Reset</button>
        )}
      </div>
    </div>
  );
}

export default App;
