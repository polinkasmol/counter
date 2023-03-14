import {useState} from "react";
import { Button } from "./Buttons/Button";
import CounterContainer from "../../Counter/containers/CounterContainer";


function ControlPanelContainer() {
    const [components, setComponents] = useState([]);

    function addComponent() {
        setComponents([...components, 1])
    }
    function resetComponent() {
        setComponents([])
    }
    return (
        <div>
            <Button onClick={addComponent} text="Add Component"/>
            <Button onClick={resetComponent} text="Reset"/>
            <h2>Numbers of counter: {components.length}</h2>
            {components.map(item =>( <CounterContainer/>))}
        </div>
    )
}
export default ControlPanelContainer;