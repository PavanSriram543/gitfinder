import React from "react";

const UserItem = ({ avatar_url, login, html_url }) => {
  return (
    <div className="card center p-2">
      <img
        src={avatar_url}
        alt="avatar"
        className="rounded-circle"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn sm my-1">
          more
        </a>
      </div>{" "}
    </div>
  );
};

export default UserItem;
