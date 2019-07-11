import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export default {
  increment: actionCreator<number>('INCREMENT'),
  decrement: actionCreator<number>('DECREMENT'),
  incrementIfOdd: actionCreator<number>('INCREMENT_IF_ODD'),
  incrementAsync: actionCreator.async<number, number>('INCREMENT_ASYNC'),
}
