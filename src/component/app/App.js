import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from "redux";  
import reducer from "../../reducer/index"
import Counter from "../counter/counter"
import Total from "../total/total"
import thunk from 'redux-thunk';

let initState = {
  counters: [
    { id: 1, name: "#1", count: 0 },
    { id: 2, name: "#2", count: 0 },
    { id: 3, name: "#3", count: 0 },
    { id: 4, name: "#4", count: 0 }
  ]
} 

const store = createStore(reducer, initState, applyMiddleware(thunk));  

class App extends React.Component {
  render () {
    var counters = store.getState().counters.map(counter => 
       <Counter key={counter.id} counter={counter} store={store} />
    );
    return <div> 
            { counters } 
            <Total store={store}/>
          </div>
  }
}

export default App;
