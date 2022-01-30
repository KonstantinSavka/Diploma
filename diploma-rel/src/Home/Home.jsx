import React, { useState, useEffect, useCallback } from "react";

import { SideBar } from "../core/components";
import { TweetForm, TweetItem } from "./components";

const Home = ({ onLogout }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://143.198.136.212/api/tweets/public")
      .then((data) => data.json())
      .then((data) => {
        setTweets(data);
      });
  }, []);

  const onTweetSubmit = useCallback((tweet) => {
    // POST -> http://143.198.136.212/api/tweets/tweets
    // {...} -> setTweets([...tweets, {...}])
  }, [])

  return (
      <>
      <div className="header">
        <div className="header__logo">
          <i className="nes-icon twitter is-large"></i>
          <span>Twitter</span>
        </div>
      </div>
      <div className="interaction-container">
        <SideBar onLogout={onLogout} />
        <TweetForm onTweet={console.log} />
      </div>
      <div className="posts">
        <div className="posts__exp">
          <span>SCROLLABLE ELEMENT </span>
        </div>
        <div className="posts__box">
          {tweets.map((e) => (
            <TweetItem {...e} key={e._id} />
          ))}
        </div>
      </div>
      </>
  );
};

export default Home;
