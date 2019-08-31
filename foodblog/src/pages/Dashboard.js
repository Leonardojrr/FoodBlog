let React = require("react");
let { Navbar } = require("../components/Navbar");
require("../css/pages-styles/Dashboard.css");

class Dashboard extends React.Component {
  render() {
    return (
      <div id="App">
        <Navbar />
      </div>
    );
  }
}

module.exports = { Dashboard };
