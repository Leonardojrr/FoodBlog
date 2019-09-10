let React = require("react");
let logo = require("../media/icons/hamburger.svg");
let { Finder } = require("./Finder");
let { Usermenu } = require("./Usermenu");
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
        <Usermenu click_menu_bottom={this.props.click_menu_bottom} />
      </div>
    );
  }
}

module.exports = { Navbar };
