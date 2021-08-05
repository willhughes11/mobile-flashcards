import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import globalStyles from '../utils/globalStyles';
import CardDeck from '../components/CardDeck';
import { decksMapStateToProps } from '../utils/mapStateProps';

class Decks extends Component {
  render() {
    const { decksArray } = this.props;
    return (
      <View>
        <ScrollView style={globalStyles.viewContainer}>
          <View>
            {decksArray.map((deck) => (
              <CardDeck deck={deck} allowNavigation={true} key={deck.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(decksMapStateToProps)(Decks);
