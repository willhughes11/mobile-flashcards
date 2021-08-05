import React from 'react';
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Decks from '../views/Decks';
import AddDeck from '../views/AddDeck';

export default TabNavigation;

const Tab = createMaterialBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Decks'
    >
      <Tab.Screen
        name='Decks'
        component={Decks}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='cards'
              size={30}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Add Deck'
        component={AddDeck}
        options={{
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='plus' size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
