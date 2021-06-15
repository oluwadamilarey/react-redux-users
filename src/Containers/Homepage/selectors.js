import { createSelector } from "reselect";

const HomepageState = (state) => {
  state.Homepage;
};

export const makeSelectUsers = createSelector(
  HomepageState,
  (homepage) => homepage.users
);
