//Phase 3:
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => {
  //Phase 3:
  const store = createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(addLoggingToDispatch, bonusMiddleware));
  
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });

  return store;
}

const addLoggingToDispatch = store => next => action => {
  console.log(`Old state: ${store.getState()}`);
  console.log(action);
  next(action);
  console.log(`New state: ${store.getState()}`);
}

//Bonus Phase:
const bonusMiddleware = store => next => action => {
  console.log("I am the bonus middleware")
  console.log(next)
}


export default configureStore;

