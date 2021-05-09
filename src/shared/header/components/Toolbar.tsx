import {  useEffect } from "react";
// import clsx from "clsx";

export const Toolbar = (props: any) => {
  const { toolbar, changeToolbar } = props;
  
  useEffect(() => {
    window.addEventListener("scroll", changeToolbar);
    return () => window.removeEventListener("scroll", changeToolbar);
  }, [changeToolbar]);

  return (
    <nav
      className={toolbar ? "toolbar-navigation active" : "toolbar-navigation"}
    >
      <ul className = "toolbar-navigation__list">
        <li>
          <a className = "toolbar-navigation__item" href="/">Home</a>
        </li>
        <li>
          <a className = "toolbar-navigation__item" href="/">News</a>
        </li>
        <li>
          <a className = "toolbar-navigation__item" href="/">Opinion</a>
        </li>
        <li>
          <a className = "toolbar-navigation__item" href="/">Culture</a>
        </li>
        <li>
          <a className = "toolbar-navigation__item" href="/">Activism</a>
        </li>
      </ul>

      {/* <div className="toolbar__navigation-items featured-links desktop-only">
          <ul>
            <li className="header-link">
              <a href="/">Home</a>
            </li>
            <li className="header-link">
              <a href="/stories">Stories</a>
            </li>
          </ul>
        </div> */}
      {/* <div className="search-form-container">
          <button
            className="search-icon-btn"
            onClick={() => handleSearchForm()}
          >
            <span>
              <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px">
                <title />
                <desc />
                <defs />
                <g
                  fill="none"
                  fillRule="evenodd"
                  id="Page-1"
                  stroke="#222222"
                  strokeWidth="1"
                >
                  <g fill="#929292" id="icon-111-search">
                    <path d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z" />
                  </g>
                </g>
              </svg>
            </span>
          </button>
          <form className={clsx(showSearchForm)} action="">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </form>
          <button
            className={clsx(showSearchForm)}
            onClick={() => handleSearchForm()}
          >
            <span>
              <svg
                enableBackground="new 0 0 32 32"
                height="32px"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
              >
                <path
                  d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                  fill="#222"
                  id="Close"
                />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </span>
          </button>
        </div> */}
    </nav>
  );
};
