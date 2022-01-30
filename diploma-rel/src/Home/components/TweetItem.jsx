import React from 'react';
import dayjs from 'dayjs';

const TweetItem = ({ content, createdAt, authorId: { firstName, nickname, lastName } }) => {
    return (
        <div className="posts__post">
          <div className="posts__container">
            <div className="posts__avatar">
              <i className="nes-pokeball"></i>
            </div>
            <div className="posts__content">
              <div className="posts__info">
                <div className="posts__name">
                  <span>{firstName} {lastName} @{nickname}</span>
                </div>
                <div className="posts__date">
                  <span>{dayjs(createdAt).fromNow()}</span>
                </div>
              </div>
              <div className="posts__text">
                {content}
              </div>
              <div className="posts__interactions">
                <div className="posts__likes">
                  <i className="nes-icon is-little star is-empty"></i>
                  <span className="star-count">0</span>
                </div>
                <div className="posts__comments">
                  <i className="nes-icon is-little like is-empty"></i>
                  <span className="comments-count">0</span>
                </div>
                <div className="posts__share">
                  <i className="nes-icon is-little twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default TweetItem;