import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import Deck from '../views/Deck';
import AddDeck from '../views/AddDeck';
import AddCard from '../views/AddCard';
import Quiz from '../views/Quiz';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Decks' component={TabNavigation} />
      <Stack.Screen name='Deck' component={Deck} />
      <Stack.Screen name='AddDeck' component={AddDeck} />
      <Stack.Screen name='AddCard' component={AddCard} />
      <Stack.Screen name='Quiz' component={Quiz} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
