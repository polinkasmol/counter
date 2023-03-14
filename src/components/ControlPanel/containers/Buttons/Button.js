import styles from "../../components/styles.module.css";

const Button = (props) => {
    return (
        <button className={styles.controlButton} onClick={props.onClick}>{props.text}</button>
    )
}
export {Button};