import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import axios from "axios";

import { makeSelectUsers } from "./selectors";
import { setUsers } from "./actions";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

export const HomePage = (props) => {
  const { users } = useSelector(stateSelector);
  const [dummyUser, setDummyUser] = useState([]);

  useEffect(() => {
    fetchUsers();
    console.log("state:", dummyUser);
  }, []);

  const actionDispactcher = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users)),
  });

  let usersArray = [];
  const fetchUsers = async () => {
    const { data } = await axios
      .get("https://reqres.in/api/users")
      .catch((err) => console.log("err: ", err));
    usersArray.push(data.data);
    setDummyUser(data.data);
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
