import PropTypes from "prop-types";
import {memo} from "react";

import styles from "./styles.module.css";


const CounterView =({
    counterValue,
    handelIncrement,
    handelReset,
    handelDecrement,
    isEven,}) => {

    return(
        <div  className={styles.wrapper}
              style={{background: isEven ? "mediumpurple" : "purple" }}
        >
            <div className={styles.display}>{counterValue}</div>
            <div className={styles.display}>{isEven ? "Even number" : "Odd number"}</div>
            <div className={styles.controlButtons}>
                <button className={styles.controlButton} onClick={handelDecrement}>
                    -
                </button>
                <button className={styles.controlButton} onClick={handelReset}>
                    Restart
                </button>
                <button className={styles.controlButton} onClick={handelIncrement}>
                    +
                </button>
            </div>
        </div>
    );
};
CounterView.propTypes = {
    counterValue: PropTypes.number.isRequired,
    handelIncrement: PropTypes.func.isRequired,
    handelReset: PropTypes.func.isRequired,
    handelDecrement:PropTypes.func.isRequired
}
export default memo(CounterView);