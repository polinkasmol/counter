import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ControlPanelView = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.controlButtons}>
         <button className={styles.controlButton}>Add counter</button>
            <button className={styles.controlButton}>Reset</button>
        </div>
        </div>
    )
}
export default ControlPanelView;