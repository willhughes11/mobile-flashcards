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

export function addDeckMapStateToProps(decks) {
    return {
      decks,
    };
}
  
export function addDeckMapDispatchToProps(dispatch, { navigation }) {
    return {
      addDeck: (title) => {
        const deckId = title.replace(/\s/g, '');
  
        dispatch(
          addDeck({
            id: deckId,
            title: title,
            questions: [],
          })
        );
      },
      goToDecks: () => navigation.navigate('Decks'),
    };
}

export function deckMapStateToProps(decks, { route }) {
    const { deckId } = route.params;
    return {
      deckId,
      deck: decks[deckId],
      count: decks[deckId].questions.length,
    };
}

export function decksMapStateToProps(decks) {
    const decksArray = Object.keys(decks)
      .map((key) => decks[key])
      .sort((a, b) => b.timestamp - a.timestamp);
    return {
      decksArray,
    };
}

export function quizMapStateToProps(decks, { route }) {
    const { deckId } = route.params;
  
    return {
      deckId,
      questions: decks[deckId].questions,
    };
}