const cardModel = {
  state: {
    cardCount: 1,
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: () => ({
    async setCardCount(cardCount) {
      this.updateState({ cardCount });
    },
  }),
};

export default cardModel;
