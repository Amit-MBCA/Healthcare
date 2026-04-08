import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigations/RootNavigator';
import { navigationRef } from './src/navigations/navigationServices';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <GestureHandlerRootView>
          <RootNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
