import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';

import ContactStore from './ContactStore.js';
import UserStore from './UserStore.js';

const store =  {ContactStore, UserStore}
const StoreContext = React.createContext(store);

export {store};
export default StoreContext;

// import React from 'react';
// import ContactStore from './ContactStore.js';

// const store =  {ContactStore}
// const StoreContext = React.createContext(store);

// export {store};
// export default StoreContext;