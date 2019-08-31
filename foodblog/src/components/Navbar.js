let React = require("react");
let logo = require("../media/hamburger.svg");
let { Finder } = require("./Finder");
require("../css/components-styles/Navbar.css");

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar_container">
        <div id="logo">
          <a href="https://www.google.com">
            <span id="f">F</span>ood<span id="b">B</span>log
          </a>
          <img src={logo} alt="" />
        </div>
        <Finder />
      </div>
    );
  }
}

module.exports = { Navbar };
