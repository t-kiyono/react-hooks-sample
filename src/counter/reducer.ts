import { reducerWithInitialState } from 'typescript-fsa-reducers';
import Actions from '../store/actions';
import { initialState } from './state';

export default reducerWithInitialState(initialState)
  .case(Actions.increment, (state, payload) => {
    return {
      value: state.value + payload
    }
  })
  .case(Actions.decrement, (state, payload) => {
    return {
      value: state.value - payload
    }
  })
  .case(Actions.incrementIfOdd, (state, payload) => {
    if (state.value % 2 !== 0) {
      return {
        value: state.value + payload
      };
    } else {
      return state;
    }
  })
  .case(Actions.incrementAsync.done, (state, payload) => {
    return {
      value: state.value + payload.result
    }
  })
  .case(Actions.incrementAsync.failed, (state, payload) => {
    console.log(payload.error);
    return state;
  });
