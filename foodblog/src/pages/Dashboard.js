let React = require("react");
let { Navbar } = require("../components/Navbar");
let { Sidemenu } = require("../components/Sidemenu");
let { Postlist } = require("../components/Postlist");
let { images } = require("../media/post_images");
let { user_images } = require("../media/user-images");
require("../css/pages-styles/Dashboard.css");

class Dashboard extends React.Component {
  state = {
    open_menu: [false, "hide", "hide_close_butcd documentstom"],
    data: [
      {
        list_id: 0,
        list_tittle: "Recomendados",
        posts: [
          {
            post_id: 0,
            post_tittle: "Grills Hamburgers",
            post_image: images.burger,
            username: "Leonardojrr",
            user_image: user_images.u7,
            tags: ["grill", "meat", "party", "fastfood"]
          },
          {
            post_id: 1,
            post_tittle: "Spicy tacos",
            post_image: images.taco,
            username: "BC0056",
            user_image: user_images.u4,
            tags: ["spicy", "meat", "party", "fastfood"]
          },
          {
            post_id: 2,
            post_tittle: "New york style Hot Dogs",
            post_image: images.hot_dog,
            username: "Totty",
            user_image: user_images.u2,
            tags: ["party", "fastfood"]
          },
          {
            post_id: 3,
            post_tittle: "Salad with cheese",
            post_image: images.salad,
            username: "Fabichula",
            user_image: user_images.u8,
            tags: ["salad", "recipe"]
          },
          {
            post_id: 4,
            post_tittle: "Tequenos para fiesta",
            post_image: images.tequenos,
            username: "JuanDi",
            user_image: user_images.u5,
            tags: ["party", "fastfood"]
          },
          {
            post_id: 5,
            post_tittle: "Pasticho para diciembre",
            post_image: images.lasana,
            username: "DrLeidy",
            user_image: user_images.u3,
            tags: ["meat"]
          }
        ]
      },
      {
        list_id: 1,
        list_tittle: "Mas vistos",
        posts: [
          {
            post_id: 0,
            post_tittle: "Grills Hamburgers",
            post_image: "../media/post_images/Hamburger.jpg",
            username: "Leonardojrr",
            user_image: "../media/user-images/user_profile7.png",
            tags: ["grill", "meat", "party", "fastfood"]
          },
          {
            post_id: 1,
            post_tittle: "Spicy tacos",
            post_image: "../media/post_images/tacos.jpg",
            username: "BC0056",
            user_image: "../media/user-images/user_profile7.png",
            tags: ["spicy", "meat", "party", "fastfood"]
          }
        ]
      }
    ]
  };

  open_side_menu = e => {
    if (this.state.open_menu[0] === false) {
      this.setState({ open_menu: [true, "show", "show_close_buttom"] });
    } else {
      this.setState({ open_menu: [false, "hide", "hide_close_buttom"] });
    }
  };

  render() {
    return (
      <div id="App">
        <Navbar click_menu_bottom={this.open_side_menu} />
        <div id="post_list_container">
          {this.state.data.map(list => {
            return <Postlist data={list} />;
          })}
        </div>
        <div id="back"></div>
        <div id="fixi"></div>
        <Sidemenu
          click_close_bottom={this.open_side_menu}
          visibility={this.state.open_menu}
        />
      </div>
    );
  }
}

module.exports = { Dashboard };
