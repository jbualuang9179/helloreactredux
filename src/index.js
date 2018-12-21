import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger))

const MyApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));
serviceWorker.unregister();
