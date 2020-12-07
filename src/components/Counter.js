import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 0
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count -1 });
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count +1  });
    }
    handleReset = () => {
        this.setState({ count: 0  });
    }

    render() { 
        return (
            <div id="counter">
                <h2>Counter</h2>
                <div className="first-line">
                    <button onClick={this.handleDecrement}>-</button>

                    <p className="result">{this.state.count}</p>

                    <button onClick={this.handleIncrement}>+</button>
                </div>
                <div className="second-line">
                    <button onClick={this.handleReset}>Reset</button>
                </div>

            </div>
          );
    }
}
 
export default Counter;