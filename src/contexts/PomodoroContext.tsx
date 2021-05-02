import { createContext, ReactNode, useState, useContext, useEffect } from "react";

interface PomodoroContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean,
  isActive: boolean,
  hasCancelled: boolean,
  hasBreak: boolean,
  start: () => void,
  reset: () => void,
  toggleModal: () => void,
  giveUp: () => void,
  takeBreak: () => void,
}

interface PomodoroProviderProps {
  children: ReactNode
}

export const PomodoroContext = createContext({} as PomodoroContextData);

export function PomodoroProvider({ children }: PomodoroProviderProps) {

  let countdownTimeout: NodeJS.Timeout;

  /** Estados  */
  const [time, setTime] = useState(0.1 * 60);
  const [cicles, setCicles] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setFinished] = useState(false);
  const [hasCancelled, setCancelled] = useState(false);
  const [hasBreak, setBreak] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function start() {
    setIsActive(true);
  }

  function reset() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setFinished(false);
    setCancelled(false);
  }

  function giveUp() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setCancelled(true);
  }

  function takeBreak() {
    toggleModal();
    setBreak(true);
  }

  function toggleModal() {
    if (hasFinished) setFinished(false);
    else setFinished(true);
  }

  function setCicleColorDOM() {
    const elements: any = document.querySelectorAll('#cicleID>div');
    elements[cicles].style.backgroundColor = "#615EBF";
    setCicles(cicles + 1);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setFinished(true);
      setIsActive(false);
      setCicleColorDOM();
    }
  }, [isActive, time]);

  return (
    <PomodoroContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        hasCancelled,
        hasBreak,
        start,
        reset,
        toggleModal,
        giveUp,
        takeBreak
      }}
    >
      {children}
    </PomodoroContext.Provider>
  )
}