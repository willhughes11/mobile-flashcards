import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import globalStyles from '../utils/globalStyles';
import navigationRef from '../navigation/NavigationFunctions';

function QuestionResults(props) {
  const {
    totalQuestions,
    questionsAnsweredCorrectly,
    onStartQuizAgain,
    deck
  } = props;

  return (
    <View style={{ flex: 2, margin: 16  }}>
      <Text style={globalStyles.title}> Questions Complete </Text>
      <Text style={globalStyles.largeText}> You got {questionsAnsweredCorrectly} out of {totalQuestions} correct! </Text>

      <TouchableOpacity onPress={onStartQuizAgain} style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnSecondaryText}>Restart</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigationRef.navigate('Decks')} style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnSecondaryText}>Return</Text>
      </TouchableOpacity>
      
    </View>
  );
}

QuestionResults.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  questionsAnsweredCorrectly: PropTypes.number.isRequired,
  deck: PropTypes.string
};

export default QuestionResults;
