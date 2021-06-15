const defaultState = {
  users: ["no users!"],
};

export default function HomePageReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
