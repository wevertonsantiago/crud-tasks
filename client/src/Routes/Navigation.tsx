import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ListTaskView} from '../ListTask/View/ListTaskView';
import {CreateTaskView} from '../CreateTask/View/CreateTaskView';
import {EditTaskView} from '../EditTask/View/EditTaskView';

export const Navigation: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="ListTaskView">
      <Stack.Screen
        name="ListTaskView"
        component={ListTaskView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateTaskView"
        component={CreateTaskView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditTaskView"
        component={EditTaskView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
