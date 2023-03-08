import { Component } from "react";
import CounterView from "../components/CounterView";



class CounterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            valueType: 'number type',
            opacityValue: 1
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
        this.setState({valueType: this.state.countValue % 2 === 0 ? 'odd number' :"even number"})
        this.setState({opacityValue: this.state.valueType === 'odd number' ? 1 : 0.5})
    }
    render() {
        return<CounterView
            counterValue={this.state.countValue}
            valueType={this.state.valueType}
            handelIncrement={this.handelIncrement}
            handelReset={this.handelReset}
            handelDecrement={this.handelDecrement}
            opacityValue={this.state.opacityValue}/>;
    }
}
export default CounterContainer;
