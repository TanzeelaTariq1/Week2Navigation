import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import MenuScreen from "./Screens/MenuScreen";
import LoginScreen from './Screens/LoginScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import MenuScreen from './Screens/MenuScreen';
//import WelcomeScreen from "./Screens/WelcomeScreen";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerStyle:{backgroundColor:'yellow',
      headerTintcolor:'#fff',
      headerTitleStyle:{
        fontweight:'bold',
        fontsize:45,
      }
      }}}>
        <Stack.Screen 
        options={{title:'Home'}}
        name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

