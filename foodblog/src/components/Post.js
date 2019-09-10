let React = require("react");
let { Tag } = require("./Tag");
require("../css/components-styles/Post.css");

class Post extends React.Component {
  render() {
    return (
      <div id="post">
        <div id="post_info">
          <div id="image_background"></div>
          <div id="post_user_info">
            <img src={this.props.data.user_image} alt="" />
            <span id="post_username">@{this.props.data.username}</span>
          </div>
          <div id="post_tags_info">
            <div id="tags_background"></div>
            <div id="tags_list" className="listi">
              {this.props.data.tags.map(tag => {
                return <Tag tag={tag} />;
              })}
            </div>
          </div>
          <img src={this.props.data.post_image} alt="" />
        </div>
        <h3>{this.props.data.post_tittle}</h3>
      </div>
    );
  }
}

module.exports = { Post };
/*
post_id: 0,
post_tittle: "Grills Hamburgers",
post_image: "foodblog/src/media/post_images/Hamburger.jpg",
username: "Leonardojrr",
user_image: "foodblog/src/media/user-images/user_profile7.png",
tags: "grill", "meat", "party", "fastfood"
*/
