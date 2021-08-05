import reducer from "./reducers";
import { View } from "react-native";
import { createStore } from "redux";
import middleware from "./middleware";
import { Provider } from "react-redux";
import React, { Component } from "react";
import { fetchAllDecks } from "./utils/api";
import { receiveDecks } from "./actions/deck";
import globalStyles from "./utils/globalStyles";
import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./navigation/NavigationFunctions";

export default class App extends Component {
  store = createStore(reducer, middleware);

  state = {
    prerequisitesLoaded: false,
  };

  componentDidMount() {
    const loadDecksPromise = fetchAllDecks();
    Promise.all([loadDecksPromise]).then((values) => {
      const decks = values[0];
      this.store.dispatch(receiveDecks(decks));

      this.setState({
        prerequisitesLoaded: true,
      });
    });
  }

  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Provider store={this.store}>
          <View style={globalStyles.appContainer}>
            {this.state.prerequisitesLoaded && <StackNavigation />}
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}
