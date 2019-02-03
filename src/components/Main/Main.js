import React from "react";
import Gif from "../Gif/Gif";
import "./main.css";
import Spinner from '../Spinner/Spinner'

const Main = ({ jokeByCategory, onRandomJoke, loading }) => {
  // const joke = loading ? <Spinner /> : `"${jokeByCategory}"`;
  const joke = loading ? <Spinner /> : (<div className="joke">"{jokeByCategory}"</div>);

  return (
    <main>
      <Gif />
        {joke}
      {/*<div className="joke">"{jokeByCategory}"</div>*/}
      {/*<Spinner />*/}
      <Gif />
      <button type="button" className="joke-btn" onClick={onRandomJoke}>
        Random joke
      </button>
    </main>
  );
};

export default Main;
