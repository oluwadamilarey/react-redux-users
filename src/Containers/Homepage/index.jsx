import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import axios from "axios";

import { makeSelectUsers } from "./selectors";
import { useEffect } from "react";
import { data } from "browserslist";
import { useState } from "react";

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

  let usersArray = [];
  const fetchUsers = async () => {
    const { data } = await axios
      .get("https://reqres.in/api/users")
      .catch((err) => console.log("err: ", err));
    console.log("users: ", data.data);
    usersArray.push(data.data);
    console.log("usersArray: ", usersArray);
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
