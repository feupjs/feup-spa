const demoModel = {
  state: {
    count: 1,
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
    async setCount(count) {
      this.updateState({ count });
    },
  }),
};

export default demoModel;
