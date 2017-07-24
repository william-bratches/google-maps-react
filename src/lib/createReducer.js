export default function(initialState, handler) {
  return function(state = initialState, action) {
    // eslint-disable-next-line no-prototype-builtins
    if (handler.hasOwnProperty(action.type)) {
      return handler[action.type](state, action);
    } else {
      return state;
    }
  };
}
