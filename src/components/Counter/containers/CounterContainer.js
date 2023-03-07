import { Component } from "react";
import CounterView from "../components/CounterView";

import styles from "./styles.module.css";

class CounterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            valueType: 'number type'
        }
    }
    handelIncrement = () =>{
        this.setState({countValue: this.state.countValue + 1});
        this.checkValueType()
    };
    handelReset = () =>{
        this.setState({countValue: 0, valueType: 'number type'});
    };
    handelDecrement = () =>{
        if (this.state.countValue > 0) {
            this.setState({countValue: this.state.countValue - 1});
            this.checkValueType()
        }
    };

    checkValueType =() =>{
        this.setState({valueType: this.state.countValue % 2 === 0 ? 'even number' :"odd number"})
    }
    render() {
        return<CounterView
            counterValue={this.state.countValue}
            valueType={this.state.valueType}
            handelIncrement={this.handelIncrement}
            handelReset={this.handelReset}
            handelDecrement={this.handelDecrement}/>;
    }
}
export default CounterContainer;
