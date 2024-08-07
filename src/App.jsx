import { useState } from 'react';

import './App.css'
import { useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running])

  return (
    <div className='container py-8'>
      <h1 className='text-center heading'>Stop Watch</h1>
      <div className='display-1 timersection'>
        <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span> {/* for hours*/}
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>  {/* for minutes*/}
        <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>   {/* for seconds*/}
      </div>

      <div className='py-3 b-3'>
        {
          running ? (<button className='border rounded btn btn-success' onClick={() => setRunning(false)}> <i className='fas fa-stop'></i></button>) :
            (<button className='border rounded btn btn-danger' onClick={() => setRunning(true)}><i className='fas fa-play'></i></button>)
        }


        &nbsp;<button className='border rounded btn btn-warning' onClick={() => setTimer(0)}>
          <i className='fa fa-refresh'> </i></button>
      </div>
    </div>
  )
}

export default App
