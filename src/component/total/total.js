import React from 'react';

export default class Total extends React.Component {

    constructor(props) {
        super(props);

        this.state = {total: 0}

        props.store.subscribe(() => {
            var count = props.store
                .getState()
                .counters
                .map(counter => counter.count)   
                .reduce((total, next) => {
                    return total + next
                });
            this.setState(state => {
                return {total:count}
            });    
        });
    }

    render() {
        return <div style={{marginLeft:"40px", marginTop:"20px"}}> total: {this.state.total} </div>
    }

}