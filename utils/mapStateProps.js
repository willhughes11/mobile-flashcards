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