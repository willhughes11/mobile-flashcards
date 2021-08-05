import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'MobileFlashcards:Decks';

export async function fetchAllDecks() {
  AsyncStorage.clear();
  let decksJson = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  if (decksJson !== null) {
    return JSON.parse(decksJson);
  } else {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(tempData));
    return tempData;
  }
}

const tempData = {
  'Q1': {
    id: 'Q1',
    title: 'React',
    questions: [
      {
        question: 'What is ReactJS?',
        answer:
          'ReactJS is an open-source frontend JavaScript library which is used for building user interfaces, specifically for single page applications.'
      },
      {
        question: 'What is JSX?',
        answer:
          'JSX is a syntax notation for JavaScript XML(XML-like syntax extension to ECMAScript). It stands for JavaScript XML.'
      }
    ]
  },
  'Q2': {
    id: 'Q2',
    title: 'HTML',
    questions: [
      {
        question: 'What does HTML stand for?',
        answer: 'Hyper Text Markup Language'
      }
    ]
  },
  'Q3': {
    id: 'Q3',
    title: 'CSS',
    questions: [
      {
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets'
      }
    ]
  },
};