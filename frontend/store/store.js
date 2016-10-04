import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middleware/root_middleware';

const configureStore = (initialState = {}) => (
  createStore(
    RootReducer,
    initialState,
    RootMiddleware
  )
);

export default configureStore;
