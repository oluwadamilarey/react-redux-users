import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import { makeSelectUsers } from "./selectors";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

export const HomePage = (props) => {
  const { users } = useSelector(stateSelector);

  console.log("users :", users);
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};
