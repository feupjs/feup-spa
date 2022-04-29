const demoModel = {
  state: {
    demoCount: 1,
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
    async setDemoCount(demoCount) {
      this.updateState({ demoCount });
    },
  }),
};

export default demoModel;
