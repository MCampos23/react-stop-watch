// Importa el componente FontAwesome y los íconos que necesites
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function StopWatch() {

  function handleStart() {
    console.log("start");
  }

  function handlePause() {
    console.log("pause");
  }
  
  function handleReset() {
    console.log("reset");
  }

  return (
    <div className="stop-watch">
      <p className='paused'>00:00:00</p>
      <div>
        <button className="start-button" onClick={handleStart}>
         <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className="stop-button" onClick={handlePause}>
         <FontAwesomeIcon icon={faPause} />
        </button>
        <button className="reset-button" onClick={handleReset}>
         <FontAwesomeIcon icon={faRotateLeft} />
        </button>
      </div>
    </div>
  );
}
