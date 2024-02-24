import { connect } from 'react-redux';
import classes from './Counter.module.css';
import { Component } from 'react';

class Counter extends Component {
    incrementHandler() {
       this.props.increment()
    }
    
    decrementHandler() {
        this.props.decrement()
    }
    
    toggleCounterHandler() {};
    
    render(){
        return (
            <main className={classes.counter}>
              <h1>Redux Counter</h1>
              <div className={classes.value}>{this.props.counter}</div>
              <div>
                <button onClick={this.incrementHandler.bind(this)}>+</button>
                <button onClick={this.decrementHandler.bind(this)}>-</button>
              </div>
              <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
          );
    }
}

//Maps state to props received into this component
const mapStateToProps = state => {
    return {
        //Picked counter value from the redux state, and bind that to counter prop. Similar to const counter = useSelector(state => state.counter)
        counter: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    //Keys are prop names used in component, and value is dispatch action
    return {
        increment: () =>  dispatch({type: 'increment'}),
        decrement: () =>  dispatch({type: 'decrement'})
    }
}
//connect is higher order component. We execute the connect(), which then returns a new function, and we execute this returned, new function as well, and to this returned function, we pass counter. This is done as connect requires some arguments too
export default connect(mapStateToProps, mapDispatchToProps)(Counter)