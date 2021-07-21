import React from "react";
import Spinner from "../layouts/spinner";
import UserItem from "./UserItem";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid">
        {users.map(({ id, ...otherProps }) => (
          <UserItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
};

export default Users;
