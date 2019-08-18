export default (state = {counters:[]}, action) => {
    switch (action.type) {
      case 'INCREMENT':
        state.counters.map(counter => (counter.id === action.id) ? {...counter, count: counter.count++} : counter) 
        return state
      case 'DECREMENT':
        console.log("decrement(); id:" + action.id);
        state.counters.map(counter => (counter.id === action.id) ? {...counter, count: counter.count--} : counter) 
        return state
      default:
        console.log("default()");
        return state
    }
  }
  