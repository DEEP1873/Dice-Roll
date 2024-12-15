import React from 'react'
import styles from "./StartGame.module.css";

const StartGame = ({toggle}) => {
  return (
    <div className={styles.container}>
        <div>

        <img src="/images/dies1.png" alt="" />
        </div>
        <div className={styles.content}>
            <h1>Dice Game</h1>
            <button onClick = {toggle} className={styles.btn1}>Play Now</button>
        </div>
    </div>
  );
};

export default StartGame;

