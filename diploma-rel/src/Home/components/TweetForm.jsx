import React, { useState, useCallback } from "react";

const TweetForm = ({ onTweet }) => {
    const [content, setContent] = useState('');
    const onContentChange = useCallback((e) => {
        setContent(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        e.preventDefault();
        onTweet && onTweet(content);
    }, [onTweet, content]);

  return (
    <div className="main">
      <div className="main__form">
        <div className="main__content">
          <form className="nes-field" onSubmit={onSubmit}>
            <label className="form-label" htmlFor="name_field">
              Your post
            </label>
            {/* <input type="text" id="name_field" className="nes-input"></input> */}
            <textarea className="nes-input" id="name_field" value={content} onChange={onContentChange}></textarea>
            <button className="nes-btn is-primary send">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TweetForm;
