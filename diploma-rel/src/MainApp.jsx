// import React from 'react';

// const DemoComponent = ({ list = [] }) => (<ul>
//     {list.map(element => <li key={`${element}-item`}>{element}</li>)}
// </ul>);

// const MainApp = (props) => {
// 	return <main>
//             <h1>{props.title}</h1>
//             <DemoComponent list={['John', 'Bob', 'Travis']} /> 
//         </main>;
// };

// export { DemoComponent };

// export default MainApp;

import React from 'react';

const MainApp = (props) => {
	return <div className="body-wrap">
    <div className="header">
      <div className="header__logo">
        <i className="nes-icon twitter is-large"></i>
        <span>R-Twitter</span>
      </div>
    </div>
    <div className="interaction-container">
      <div className="aside">
        <div className="aside__menu">
          <div className="aside__content">
            <div className="aside__actions">
              <span># Home</span>
            </div>
            <div className="aside__actions">
              <span># Profile</span>
            </div>
            <div className="aside__actions">
              <span># Log out</span>
            </div>
            <button type="button" className="nes-btn is-primary">Tweet</button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main__form">
          <div className="main__content">
            <form className="nes-field" action="">
              <label className="form-label" for="name_field">Your post</label>
              <input type="text" id="name_field" className="nes-input"></input>
              <button type="submit" className="nes-btn is-primary send">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="posts">
      <div className="posts__exp">
        <span>SCROLLABLE ELEMENT </span>
      </div>
     <div className="posts__box">
      <div className="posts__post">
        <div className="posts__container">
          <div className="posts__avatar">
            <i className="nes-pokeball"></i>
          </div>
          <div className="posts__content">
            <div className="posts__info">
              <div className="posts__name">
                <span>AC/DC</span>
              </div>
              <div className="posts__date">
                <span>01.01.2022</span>
              </div>
            </div>
            <div className="posts__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo quisquam est. Aliquid incidunt illo pariatur numquam nesciunt adipisci, molestias, laborum magnam voluptates dolore sapiente cumque quasi magni debitis quia?
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
      <div className="posts__post">
        <div className="posts__container">
          <div className="posts__avatar">
            <i className="nes-pokeball"></i>
          </div>
          <div className="posts__content">
            <div className="posts__info">
              <div className="posts__name">
                <span>AC/DC</span>
              </div>
              <div className="posts__date">
                <span>01.01.2022</span>
              </div>
            </div>
            <div className="posts__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo quisquam est. Aliquid incidunt illo pariatur numquam nesciunt adipisci, molestias, laborum magnam voluptates dolore sapiente cumque quasi magni debitis quia?
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
      
      
     </div>
    </div>

  </div>;
};

export default MainApp;