'use client';
import { Provider } from 'react-redux';
import store from './store';
import Login from './login';

function ReduxExample() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default ReduxExample;
