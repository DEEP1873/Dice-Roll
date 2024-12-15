
// import { useState } from "react";
import styles from "./DiceRole.module.css"

const DiceRole = ({currentDice,roleDice}) => {
   
  return (
    <div className={styles.diceroll}>
        <div className={styles.dice} onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="" />
        </div>
         <p>Click On Dice to roll</p>
    </div>
  )
}

export default DiceRole