import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.counter.name,
            count: props.counter.count
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        props.store.subscribe(() => {
            this.setState(state => {

                var count = props.store
                        .getState()
                        .counters
                        .find(conter => conter.id === props.counter.id)
                        .count

                return {
                    ...state,
                    count:count
                }
            });
        });

    }

    increment() {
        this.props.store.dispatch({
            type: "INCREMENT",
            id: this.props.counter.id
        });
    }  

    decrement() {
        this.props.store.dispatch({
            type: "DECREMENT",
            id: this.props.counter.id
        });
    }

    render () {
      return <div className="col-6" style={{marginTop:"20px"}}> 
                <span> counter: {this.state.name} </span>
                <button onClick={this.increment} className="btn btn-outline-dark"> + </button> 
                <button onClick={this.decrement} className="btn btn-outline-dark"> - </button>
                <span>result: {this.state.count }</span>
             </div>
    }
}

export default Counter;