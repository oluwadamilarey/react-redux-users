const defaultState = {
  users: ["no users!"],
};

export default function homepageReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
