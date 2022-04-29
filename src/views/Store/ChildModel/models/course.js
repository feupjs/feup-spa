const courseModel = {
  state: {
    courseCount: 1,
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
    async setCourseCount(courseCount) {
      this.updateState({ courseCount });
    },
  }),
};

export default courseModel;
