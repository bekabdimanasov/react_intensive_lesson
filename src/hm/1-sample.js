import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }
    state = {
        cnt: this.props.min
    };

    decrease = () => {
        this.set(this.state.cnt - 1);
    };

    increase = () => {
        this.set(this.state.cnt + 1);
    };

    set = (newCnt) => {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({cnt});  //setState main method
    };

    render() {
        return(
            <div>
                <button onClick={this.decrease}>-</button>
                <strong>{this.state.cnt}</strong>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}
