import React from 'react';
import Welcome from './src/screens/Home/welcome';
import Playground from './src/screens/Playground/playground';
import Selector from './src/screens/Selector/cross-selector';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GridDataProvider from './src/contexts/genericContext';
export type RootStackParamList = {
  Welcome: undefined;
  Playground: undefined;
  Selector: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <GridDataProvider>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Playground" component={Playground} />
          <Stack.Screen name="Selector" component={Selector} />
        </Stack.Navigator>
      </GridDataProvider>
    </NavigationContainer>
  );
}
