export const ADD_CARD = "ADD_CARD";

export function addCard(questionDetails) {
    return {
      type: ADD_CARD,
      questionDetails,
    };
  }