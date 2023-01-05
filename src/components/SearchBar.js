import React, { useEffect, useState } from "react";
import Repos from "./Repos";
import User from "./User";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState("");
  const [search, setSearch] = useState("");
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [repoData, setRepoData] = useState([]);
  const [isRepoLoading, setIsRepoLoading] = useState(false);

  const handleClick = () => {
    if (search === "") {
      alert("Please write something for seacrh");
    } else {
      fetch(`https://api.github.com/users/${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMyData(data);
          setIsLoading(true);
        });
      fetch(`https://api.github.com/users/${search}/repos`)
        .then((res) => res.json())
        .then((data) => {
          setRepoData(data);
          setIsRepoLoading(true);
        });
    }
  };
  useEffect(() => {
    setSearch(inputVal);
  }, [inputVal]);

  return (
    <>
      <div className="search bg-light p-4 mt-3 rounded">
        <h1>Search for Username</h1>
        <div className="row d-flex">
          <div className="col-10">
            <input
              value={inputVal}
              className="form-control"
              type="text"
              placeholder="Search User.."
              aria-label="default input example"
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {isLoading && <User data={myData} loading={isLoading} />}
      {isRepoLoading && (
        <Repos data={repoData} loading={isRepoLoading} search={search} />
      )}
    </>
  );
};

export default SearchBar;
