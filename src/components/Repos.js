import React from "react";

const Repos = (props) => {
  let len = props.data.length;
  return (
    <>
      {!len && <h2 className="text-danger mt-4">No Repos Available</h2>}
      {len && (
        <div className="search bg-light p-4 mt-5 rounded">
          <h1 className="text-start">Repo List</h1>
          <ol>
            {props.data.map((elem) => {
              return (
                <li className="text-start mt-3" key={elem.id}>
                  <a
                    href={`https://github.com/${props.search}/${elem.name}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {elem.name}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
};

export default Repos;
