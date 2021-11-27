import request from '../../utils/request';

export default {
  state: {
    status: -1,
    message: '',
    data: null,
    count: 0,
  },
  reducers: {
    result(state, payload) {
      return { ...state, ...payload };
    },
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
    async getResult() {
      const params = {
        name: 'stark',
        age: 18,
      };
      const res = await request.get('https://api.shudong.wang/v1/movies/hot', params);

      this.result(JSON.parse(res.data));
    },
    async setCount(count) {
      this.updateState({ count });
    },
  }),
};
