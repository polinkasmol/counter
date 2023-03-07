import PropTypes from "prop-types";

import styles from "./styles.module.css";
const CounterView =({counterValue,valueType,handelIncrement,handelReset,handelDecrement}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.display}>{counterValue}</div>
            <div className={styles.display}>{valueType}</div>
            <div className={styles.controlButtons}>
                <button className={styles.controlButton} onClick={handelDecrement}>-</button>
                <button className={styles.controlButton} onClick={handelReset}>Restart</button>
                <button className={styles.controlButton} onClick={handelIncrement}>+</button>
            </div>
        </div>
    );
};
CounterView.propTypes = {
    counterValue: PropTypes.number.isRequired,
    valueType:PropTypes.string.isRequired,
    handelIncrement: PropTypes.func.isRequired,
    handelReset: PropTypes.func.isRequired,
    handelDecrement:PropTypes.func.isRequired
}
export default CounterView;