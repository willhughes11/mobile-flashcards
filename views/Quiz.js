import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import globalStyles from '../utils/globalStyles';
import QuestionHeader from '../components/QuestionHeader';
import Question from '../components/Question';
import QuestionResults from '../components/QuestionResults';
import { quizMapStateToProps } from '../utils/mapStateProps';
import { clearLocalNotification, setLocalNotification } from "../utils/notifications";

class Quiz extends Component {
  state = {
    index: 0,
    correct: 0,
    complete: false,
  };

  handleRestartQuiz = () => {
    this.setState({
      index: 0,
      correct: 0,
      complete: false,
    });
  };

  handleAnsweredQuestion = (correct) => {
    if (correct) {
      this.setState({ correct: this.state.correct + 1 });
    }

    if (this.state.index === this.props.questions.length - 1) {
      this.setState({ complete: true });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  render() {
    const { questions } = this.props;
    const {
      index,
      correct,
      complete,
    } = this.state;
    const currQuestion = questions[index];

    if(!complete){
      clearLocalNotification().then(setLocalNotification);
    }

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={(globalStyles.viewContainer, { flex: 1 })}>
          <QuestionHeader
            index={index}
            totalQuestions={questions.length}
          />

          {complete ? (
            <QuestionResults
              questionsAnsweredCorrectly={correct}
              totalQuestions={questions.length}
              onStartQuizAgain={this.handleRestartQuiz}
            />
          ) : (
            <Question
              questionObject={currQuestion}
              onQuestionAnswered={this.handleAnsweredQuestion}
            />
          )}
        </View>
      </View>
    );
  }
}

export default connect(quizMapStateToProps)(Quiz);