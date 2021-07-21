import React from "react";

const UserItem = ({ avatar_url, login }) => {
  return (
    <div className="card center p-2">
      <img
        src={avatar_url}
        alt="avatar"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
    </div>
  );
};

export default UserItem;
