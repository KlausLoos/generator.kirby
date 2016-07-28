import {compose, createStore} from 'redux';
import reducer from './reducer';
import {setState} from './actions';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);

store.dispatch(setState());

export default store

