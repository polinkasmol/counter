import {useCallback,useState } from "react";
import CounterView from "../components/CounterView";



const CounterContainer = () => {
    const [counterValue, setCounterValue] = useState(0)
    let valueType;

    valueType = counterValue % 2 !== 0;

    if (counterValue < 0) setCounterValue(0)

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
