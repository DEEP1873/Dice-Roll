
import styles from "./NumberSelector.module.css"


const NumberSelector = ({setError ,error,selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];
    const NumberSelectorHandler = (value) =>{
      setSelectedNumber(value);
      setError(""); 

    }
  return (
    <div className={styles.NumberSelectorContainer}>
      <p>{error}</p>
      <div className={styles.flex}>
        {arrNumber.map((value, i)=>(
            <div className={styles.Box} isSelected={value == selectedNumber} key={i} onClick={()=>NumberSelectorHandler(value) }>{value}</div>
        ))}
      </div>
      <p>Selected number</p>

    </div>
  );
};

export default NumberSelector;


    
