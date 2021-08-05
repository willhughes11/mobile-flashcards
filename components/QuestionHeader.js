import React from 'react';
import PropTypes from 'prop-types';
import {Text, View } from 'react-native';
import globalStyles from '../utils/globalStyles';

export default function QuestionHeader(props) {
  return (
    <View style={{ flex: 1, margin: 16, alignItems: 'center' }}>
      <View style={globalStyles.headerTextContainer}>
        <Text style={globalStyles.countText}>
          {props.currentQuestionIndex + 1} / {props.totalQuestions}
        </Text>
      </View>
    </View>
  );
}

QuestionHeader.propTypes = {
  currentQuestionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};
