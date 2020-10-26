import { createStore, compose } from 'redux';
import rootReducer from '@/data/rootReducer';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
  );

  return store;
}
