import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addDeck } from '../actions/deck';
import globalStyles from '../utils/globalStyles';
import { textColor, white, blue } from '../utils/globalStyles';
import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import { addDeckMapStateToProps, addDeckMapDispatchToProps } from '../utils/mapStateProps';

class AddDeck extends Component {
  state = {
    title: '',
    showInputError: false,
    showUniqueError: false,
  };

  resetState = () => {
    this.setState({
      title: '',
      showInputError: false,
      showUniqueError: false,
    });
  };

  onSubmit = () => {
    const { decks, addDeck, goToDecks } = this.props;
    const { title } = this.state;

    const removeWhitespace = title.replace(/\s/g, '');

    if (!removeWhitespace.length) {
      this.setState({
        showInputError: true,
        showUniqueError: false,
      });
      return;
    }

    const notUnique = Object.keys(decks).some((key) => {
      const deck = decks[key];
      return deck.title === title;
    });

    if (notUnique) {
      this.setState({
        showInputError: false,
        showUniqueError: true,
      });
      return;
    }

    addDeck(title);
    goToDecks();
    this.resetState();
  };

  onTitleChange = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={globalStyles.viewContainer}>
          <Text style={globalStyles.title}>Add Deck</Text>
          <Text style={globalStyles.tagline}>Create a New Deck</Text>

          <Text style={globalStyles.label}>Title</Text>
          <TextInput
            value={this.state.title}
            onChangeText={this.onTitleChange}
            style={globalStyles.textInput}
          />

          {this.state.showInputError && (
            <Text style={globalStyles.inputErrorText}>
              Title Required
            </Text>
          )}

          {this.state.showUniqueError && (
            <Text style={globalStyles.inputErrorText}>
              Title Must Be Unique
            </Text>
          )}

          <TouchableOpacity
            onPress={this.onSubmit}
            style={globalStyles.btnPrimary}
          >
            <Text style={globalStyles.btnPrimaryText}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(addDeckMapStateToProps, addDeckMapDispatchToProps)(AddDeck);
