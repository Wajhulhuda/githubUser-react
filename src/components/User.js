import React from "react";

const User = (props) => {
  let {
    avatar_url,
    message,
    created_at,
    followers,
    following,
    html_url,
    login,
    name,
    public_repos,
  } = props.data;

  return (
    <>
      {message && <h2 className="mt-4 text-danger">{message}</h2>}
      {!message && (
        <div className="search bg-light p-4 mt-5 rounded">
          <div className="row">
            <div className="col-4">
              <img src={avatar_url} alt="profile" width="250" height="250" />
            </div>
            <div className="col-8 text-start ps-5">
              <h1 className="mt-3">{name}</h1>
              <h3 className="mt-4">
                <a href={html_url} target="_blank" rel="noreferrer">
                  @{login}
                </a>
              </h3>
              <p className="mt-5">Created on {created_at.slice(0, 10)}</p>
            </div>
          </div>
          <div className="row d-flex mt-4">
            <div className="col-4">
              <p>{followers}</p>
              <h5>Followers</h5>
            </div>
            <div className="col-4">
              <p>{public_repos}</p>
              <h5>Repos</h5>
            </div>
            <div className="col-4">
              <p>{following}</p>
              <h5>Following</h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
