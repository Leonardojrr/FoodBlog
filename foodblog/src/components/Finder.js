let React = require("react");

require("../css/components-styles/Finder.css");

class Finder extends React.Component {
  render() {
    return (
      <div id="Finder_container">
        <input type="text" placeholder="Search something"></input>
        <div id="search_image_container">
          <img alt="" />
        </div>
      </div>
    );
  }
}

module.exports = { Finder };
