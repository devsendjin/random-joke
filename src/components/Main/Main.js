import React from "react";
import Gif from "../Gif/Gif";
import "./main.css";
import Spinner from '../Spinner/Spinner'

const Main = ({ jokeByCategory, resetCategory, onRandomJoke, loading }) => {
  const joke = loading ? <Spinner /> : (<div className="joke">"{jokeByCategory}"</div>);

  return (
    <main>
      <Gif />
        {joke}
      <Gif />
      <div className="btn-wrapper">
        <button type="button" className="joke-btn" onClick={onRandomJoke}>
          Random joke
        </button>
        <button type="button" className="joke-btn" onClick={resetCategory}>
          Reset category
        </button>
      </div>
    </main>
  );
};

export default Main;
