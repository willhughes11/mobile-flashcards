import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';
import NavigationService from '../navigation/NavigationFunctions';
import CardDeck from '../components/CardDeck';
import { deckMapStateToProps } from '../utils/mapStateProps';

class Deck extends Component {
  state = {
    showError: false,
  };

  handleQuestions = () => {
    const { deck, count } = this.props;

    if (count === 0) {
      this.setState({ showError: true });
    } else {
      NavigationService.navigate('Quiz', {
        deckId: deck.id,
      });
    }
  };

  handleCards = () => {
    const { deck } = this.props;

    this.setState({ showError: false });

    NavigationService.navigate('AddCard', {
      deckId: deck.id,
    });
  };

  render() {
    const { deck } = this.props;
    const { showError } = this.state;

    return (
      <View style={[globalStyles.viewContainer, { marginTop: 8 }]}>
        <CardDeck deck={deck} allowNavigation={false} />

        <Text style={globalStyles.title}>Deck</Text>

        <TouchableOpacity
          onPress={this.handleCards}
          style={globalStyles.btnSecondary}
        >
          <Text style={globalStyles.btnSecondaryText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.handleQuestions}
          style={globalStyles.btnPrimary}
        >
          <Text style={globalStyles.btnPrimaryText}>Start Quiz</Text>
        </TouchableOpacity>

        {showError && (
          <Text style={globalStyles.inputErrorText}>
            Add One or More Cards!
          </Text>
        )}
      </View>
    );
  }
}

export default connect(deckMapStateToProps)(Deck);
