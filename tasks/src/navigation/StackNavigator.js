import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthOrApp from '../screens/AuthOrApp';
import Auth from '../screens/Auth';
import DrawerNavigation from './DrawerNavigation';

const Authentication = props => {
  return <Auth {...props} />;
};

const TaskList = props => {
  return <DrawerNavigation {...props} />;
};

const Root = props => {
  return <AuthOrApp {...props} />;
};

const Stack = createNativeStackNavigator();

const StackNavigator = ({route, navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
