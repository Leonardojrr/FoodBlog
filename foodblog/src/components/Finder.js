let React = require("react");

require("../css/components-styles/Finder.css");

class Finder extends React.Component {
  render() {
    return (
      <div id="Finder_container">
        <input
          id="search_field"
          type="text"
          placeholder="Search posts, users , tags..."
        ></input>
        <div id="search_icon_container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.023"
            height="20.411"
            viewBox="0 0 20.023 20.411"
          >
            <g
              id="Group_31"
              data-name="Group 31"
              transform="translate(-873 -44)"
            >
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                className="cls-1"
                transform="translate(873 44)"
              >
                <circle className="cls-2" cx="7.963" cy="7.963" r="7.963" />
                <circle className="cls-3" cx="7.963" cy="7.963" r="6.963" />
              </g>
              <path
                id="Path_10"
                data-name="Path 10"
                className="cls-1"
                d="M922.753,61.179l-5.714-6.286"
                transform="translate(-30.47 2.56)"
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

module.exports = { Finder };
