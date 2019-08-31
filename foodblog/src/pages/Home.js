let React = require("react");
let { Navbar } = require("../components/Navbar");
let bg_foto = require("../media/Restaurants.jpg");
require("../css/pages-styles/Home.css");

class Home extends React.Component {
  render() {
    return (
      <div id="app">
        <header>
          <img src={bg_foto} alt="" />
          <Navbar />
        </header>
        <section></section>
      </div>
    );
  }
}

module.exports = { Home };
