import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake /> */}
        <ItemContainer />
        {/* <HooksCakeContainer /> */}
        <CakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
