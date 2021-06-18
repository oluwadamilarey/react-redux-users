import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import axios from "axios";

import { makeSelectUsers } from "./selectors";
import { setUsers } from "./actions";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const actionDispactch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

export const HomePage = (props) => {
  const { users } = useSelector(stateSelector);
  const [dummyUser, setDummyUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const { setUser } = actionDispactch(useDispatch());

  let usersArray = [];
  const fetchUsers = async () => {
    const { data } = await axios
      .get("https://reqres.in/api/users")
      .catch((err) => console.log("err: ", err));
    usersArray.push(data.data);
    setDummyUser(data.data);
    setUser(data.data);
  };

  return (
    <div>
      <p>Hello World</p>
      {dummyUser.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};
