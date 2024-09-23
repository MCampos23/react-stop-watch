import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function StopWatch() {
  const [isTimerRunning, setIsTimerRunning] = useState(null);
  const [centiseconds, setCentiseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const timer = useRef(null);
  const centisecondsRef = useRef(0);  // Referencia para el valor de centésimas
  const secondsRef = useRef(0);       // Referencia para el valor de segundos
  const minutesRef = useRef(0);       // Referencia para el valor de minutos

  const updateTimer = () => {
    centisecondsRef.current += 1;
    if (centisecondsRef.current === 100) {
      centisecondsRef.current = 0;
      secondsRef.current += 1;
      if (secondsRef.current === 60) {
        secondsRef.current = 0;
        minutesRef.current += 1;
      }
    }
    // Actualizamos el estado para reflejar los cambios visualmente
    setCentiseconds(centisecondsRef.current);
    setSeconds(secondsRef.current);
    setMinutes(minutesRef.current);
  };

  const handleStart = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      timer.current = setInterval(updateTimer, 10);  // Ejecutamos cada 10ms
    }
  };

  const handlePause = () => {
    if (isTimerRunning) {
      clearInterval(timer.current);
      setIsTimerRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(timer.current);
    setIsTimerRunning(false);
    centisecondsRef.current = 0;
    secondsRef.current = 0;
    minutesRef.current = 0;
    setCentiseconds(0);
    setSeconds(0);
    setMinutes(0);
  };

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className={`stop-watch ${isTimerRunning && 'running'}`}>
      <p className={`time-display ${!isTimerRunning && isTimerRunning !== null && 'paused'}`}>
        {formatTime(minutes)}:{formatTime(seconds)}:{formatTime(centiseconds)}
      </p>
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
