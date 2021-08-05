import React, { Component } from 'react';
import { addCard } from '../actions/card';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';
// import {addCardMapDispatchToProps} from '../utils/mapStateProps';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    showError: false,
  };

  resetState = () => {
    this.setState({
      question: '',
      answer: '',
      showError: false,
    });
  };

  onSubmit = () => {
    const { addCard } = this.props;
    const { question, answer } = this.state;
    const questionWhitespaceRemoved = question.replace(/\s/g, '');
    const answerWhitespaceRemoved = answer.replace(/\s/g, '');

    let validationFailed = false;

    if (!questionWhitespaceRemoved.length || !answerWhitespaceRemoved.length) {
      this.setState({ showError: true });
      validationFailed = true;
    } else {
      this.setState({ showError: false });
    }

    if (validationFailed) {
      return;
    }

    addCard(question, answer);
    this.resetState();
  };

  onQuestionChange = (value) => {
    this.setState({ question: value });
  };

  onAnswerChange = (value) => {
    this.setState({ answer: value });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={globalStyles.viewContainer}>
          <Text style={globalStyles.title}>Add Card</Text>
          <Text style={globalStyles.tagline}>
            Add a New Card the Deck
          </Text>

          {this.state.showError && (
            <Text style={globalStyles.inputErrorText}>
              Please Enter Text to Both Fields!
            </Text>
          )}

          <Text style={globalStyles.label}>What is the Question?</Text>
          <TextInput
            value={this.state.question}
            onChangeText={this.onQuestionChange}
            style={globalStyles.textInput}
          />
          <Text style={globalStyles.label}>What is the Answer?</Text>
          <TextInput
            value={this.state.answer}
            onChangeText={this.onAnswerChange}
            style={globalStyles.textInput}
          />

          <TouchableOpacity
            onPress={this.onSubmit}
            style={globalStyles.btnPrimary}
          >
            <Text style={globalStyles.btnPrimaryText}>Add card</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export function addCardMapDispatchToProps(dispatch, { route }) {
  return {
    addCard: (question, answer) => {
      const { deckId } = route.params;
      const questionDetails = {
        deckId,
        question,
        answer,
      };
      dispatch(addCard(questionDetails));
    },
  };
}

export default connect(null, addCardMapDispatchToProps)(AddCard);