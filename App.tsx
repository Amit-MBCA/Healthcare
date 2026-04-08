import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigations/RootNavigator';
import { navigationRef } from './src/navigations/navigationServices';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
