import React from 'react'
import styles from "./TotalScore.module.css"

const TotalScore = ({score}) => {
  return (
        <div className={styles.ScoreCont}>
            <h1>{score}</h1>
            <p>Total score</p>
        </div>
    
  )
}

export default TotalScore