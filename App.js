import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { enableScreens } from 'react-native-screens';
// import { AppLoading } from 'expo';
import ContactEditScreen from './screens/ContactEditScreen.js';
import HomeScreen from './screens/HomeScreen'
import ContactsScreen from './screens/ContactsScreen';
import ContactScreen from './screens/ContactScreen';

enableScreens();
 
const AppNavigator = createStackNavigator(
  {
    Misterbitcoin: HomeScreen,
    Contacts: ContactsScreen, 
    Details: ContactScreen, 
    ContactEdit: ContactEditScreen
  },
  {
    initialRouteName: 'Misterbitcoin',
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    }
  }
);
 
export default createAppContainer(AppNavigator);