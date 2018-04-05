'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import Index from './components/index.react';
/*import storeFactory from './stores/store-factory';
import rootReducer from './reducers/index';
*/

// const store = storeFactory(rootReducer);

ReactDOM.render(
    <Index />,
    document.getElementById('wrapper')
);
