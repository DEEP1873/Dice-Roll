
import TotalScore from './TotalScore'
import NumberSelector from "./NumberSelector";
import styles from './PlayGame.module.css'
import DiceRole from './DiceRole';
import { useState } from 'react';
import Rule from './Rule';
const PlayGame = () => {
  const [score,setScore] = useState(0)
  const [currentDice,setcurrentDice] = useState("1");
  const [selectedNumber, setSelectedNumber] = useState();
  const [error,setError] = useState();
  const [showRule,setShowRule] = useState();

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const roleDice = () =>{
    if(!selectedNumber) {
      setError("You Have Not Selected Any Number");
      return;

    }
    const randomNumber = generateRandomNumber(1,7);

    setcurrentDice((prev) => randomNumber);

    if(selectedNumber==randomNumber)
    {
        setScore((prev)=>prev + randomNumber);
    }
    else{
      setScore((prev)=>prev - 2);
    }
    setSelectedNumber(undefined);
}

const resetScore = () =>{
  setScore(0);
}

  return (
    <main className={styles.mainContainer}>
      <div className={styles.Container}>
        <TotalScore score={score}/>
        <NumberSelector setError = {setError} error = {error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <div>
        <DiceRole currentDice={currentDice} roleDice={roleDice}/>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn1} onClick={resetScore}>Reset Score</button>
        <button onClick={()=> setShowRule((prev)=> !prev )}
        className={styles.btn1}> {showRule? "Hide" : "Show"}  Rules</button>
      </div>
      {showRule && <Rule/>}

    </main>
  )
}

export default PlayGame