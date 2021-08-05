import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';

class Question extends Component {
  state = {
    showAnswerArea: false,
  };

  handleShowAnswer = () => {
    this.setState({ showAnswerArea: true });
  };

  handleQuestionAnswered = (answeredCorrectly) => {
    const { onQuestionAnswered } = this.props;

    this.setState({ showAnswerArea: false });

    onQuestionAnswered(answeredCorrectly);
  };

  render() {
    const { questionObject } = this.props;

    return (
      <View style={{ flex: 2, margin: 16 }}>
        <Text style={globalStyles.title}>Question</Text>
        <Text style={globalStyles.largeText}>{questionObject.question}</Text>

        {!this.state.showAnswerArea && (
          <View>
            <TouchableOpacity
              onPress={this.handleShowAnswer}
              style={globalStyles.btnSecondary}
            >
              <Text style={globalStyles.btnSecondaryText}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        )}

        {this.state.showAnswerArea && (
          <View>
            <Text style={globalStyles.heading}>Answer</Text>
            <Text style={globalStyles.largeText}>{questionObject.answer}</Text>

            <Text style={globalStyles.heading}>How did you do?</Text>
            <Text style={globalStyles.smallText}>You got the answer...</Text>

            <View style={globalStyles.buttonsContainer}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.handleQuestionAnswered(true)}
                  style={globalStyles.btnSuccess}
                >
                  <Text style={globalStyles.btnSuccessText}>Correct</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.handleQuestionAnswered(false)}
                  style={globalStyles.btnError}
                >
                  <Text style={globalStyles.btnErrorText}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

Question.propTypes = {
  questionObject: PropTypes.object.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired,
};

export default Question;
