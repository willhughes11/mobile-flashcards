import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import NavigationService from '../navigation/NavigationFunctions';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/globalStyles';

class CardDeck extends Component {

  handleDeckPress = () => {
    const { deck } = this.props;
    NavigationService.navigate('Deck', {
      deckId: deck.id,
    });
  };

  render() {
    const { deck, allowNavigation } = this.props;
    const cardCount = deck.questions.length;

    return (
        <TouchableOpacity
          disabled={!allowNavigation}
          onPress={this.handleDeckPress}
          style={globalStyles.container}
        >
          <View style={globalStyles.container}>
            <View style={globalStyles.contentContainer}>
              <Text style={globalStyles.title}>{deck.title}</Text>
              <View style={globalStyles.countContainer}>
                <Text style={globalStyles.countText}>
                  Card Count : {cardCount}
                </Text>
              </View>
            </View>
          </View>
          {allowNavigation && (
            <FontAwesome
              name='chevron-right'
              style={globalStyles.rightArrow}
              size={18}
            />
          )}
        </TouchableOpacity>
    );
  }
}

CardDeck.propTypes = {
  deck: PropTypes.object.isRequired,
  allowNavigation: PropTypes.bool,
};

export default CardDeck;
