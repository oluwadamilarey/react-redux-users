import { createSelector } from "reselect";

const HomePageState = (state) => state.HomePage;

export const makeSelectUsers = createSelector(
  HomePageState,
  (HomePage) => HomePage.users
);
