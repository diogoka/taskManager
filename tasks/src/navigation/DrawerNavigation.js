import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TaskList from '../screens/TaskList';
import CustomNavigator from './CustomNavigator';
import commonStyles from '../commonStyles';

const Today = () => {
  return <TaskList title="Today" daysAhead={0} />;
};

const Tomorrow = () => {
  return <TaskList title="Tomorrow" daysAhead={1} />;
};

const Week = () => {
  return <TaskList title="Week" daysAhead={7} />;
};

const Month = () => {
  return <TaskList title="Month" daysAhead={31} />;
};

const Drawer = createDrawerNavigator();

const drawerNavigation = ({route}) => {
  const {user} = route.params;

  return (
    <Drawer.Navigator
      initialRouteName="Today"
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        drawerLabelStyle: {
          fontFamily: commonStyles.fontFamily,
          fontWeight: 'normal',
          fontSize: 20,
        },
        drawerActiveTintColor: commonStyles.colors.mainText,
      }}
      useLegacyImplementation
      drawerContent={props => (
        <CustomNavigator
          {...props}
          userName={user.name}
          userEmail={user.email}
        />
      )}>
      <Drawer.Screen
        name="Today"
        component={Today}
        options={{
          headerTitle: ' ',
          drawerActiveBackgroundColor: commonStyles.colors.today,
        }}
      />
      <Drawer.Screen
        name="Tomorrow"
        component={Tomorrow}
        options={{
          headerTitle: ' ',
          drawerActiveBackgroundColor: commonStyles.colors.tomorrow,
        }}
      />
      <Drawer.Screen
        name="Week"
        component={Week}
        options={{
          headerTitle: ' ',
          drawerActiveBackgroundColor: commonStyles.colors.week,
        }}
      />
      <Drawer.Screen
        name="Month"
        component={Month}
        options={{
          headerTitle: ' ',
          drawerActiveBackgroundColor: '#1656be',
        }}
      />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;
