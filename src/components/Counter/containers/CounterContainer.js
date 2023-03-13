import {useCallback,useState } from "react";
import CounterView from "../components/CounterView";



const CounterContainer = () => {
    const [counterValue, setCounterValue] = useState(0)
    let valueType = true

    if (counterValue % 2 === 0) valueType = false;
    else  valueType = true;

    const handelIncrement = useCallback(() =>{
        setCounterValue((state) => state + 1 );
    }, []);

    const handelReset = useCallback(() =>{
        setCounterValue(0);
    },[]);

    const handelDecrement = useCallback(() =>{
        setCounterValue((state) => state - 1);
    }, []);

    // const handelAddAmount = useCallback((amount) =>{
    //     setCountValue((state) => state + amount);
    // }, []);

    return (
        <CounterView
        counterValue = {counterValue}
        handelIncrement = {handelIncrement}
        handelReset = {handelReset}
        handelDecrement = {handelDecrement}
        isEven={valueType}
    />
);
};
export default CounterContainer;
