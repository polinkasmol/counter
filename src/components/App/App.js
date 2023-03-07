
import styles from "./styles.module.css";
import CounterContainer from "../Counter/containers/CounterContainer";
const App = () =>{
   return <div className={styles.wrapper}>
       <CounterContainer/>
   </div>;
};

export default App;
