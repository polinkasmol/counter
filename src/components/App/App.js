import CounterContainer from "../Counter/containers/CounterContainer";
import ControlPanelView from "../ControlPanel/components";

import styles from "./styles.module.css";

const App = () =>{
   return <div className={styles.wrapper}>
       <ControlPanelView/>
       {/*<CounterContainer/>*/}
   </div>;
};

export default App;
