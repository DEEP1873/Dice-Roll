import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import PlayGame from "./components/PlayGame"


const Button = styled.button``
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <div>
      {isGameStarted ? <PlayGame/> : <StartGame toggle = {toggleGamePlay}/>}
    </div>  
  )

}

export default App
