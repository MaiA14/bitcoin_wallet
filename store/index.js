import React from 'react';
import ContactStore from './ContactStore.js';

const store =  {ContactStore}
const StoreContext = React.createContext(store);

export {store};
export default StoreContext;