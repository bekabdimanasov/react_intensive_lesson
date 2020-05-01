import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }
    state = {
        cnt: this.props.min,
        inputValue: this.props.min
    };

    decrease = () => {
        this.set(this.state.cnt - 1);
    };

    increase = () => {
        this.set(this.state.cnt + 1);
    };

    set = (newCnt) => {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({
            cnt,
            inputValue: cnt
        });  //setState main method
    };

    setValue = (newStr) => {
        this.setState({ inputValue: newStr})
    };

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    };

    checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            this.applyValue();
        }
    }

    render() {
        return(
            <div>
                {this.state.cnt}<br/>
                {this.state.inputValue}<br/>
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue}
                       onChange={e => this.setValue(e.target.value)}
                       onBlur={this.applyValue}
                       onKeyUp={this.checkEnterKey} /*Enter in input*/
                />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}
