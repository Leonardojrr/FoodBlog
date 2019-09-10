let React = require("react");
let { Post } = require("./Post");
require("../css/components-styles/Postlist.css");

class Postlist extends React.Component {
  render() {
    return (
      <div id="post_list">
        <h2>{this.props.data.list_tittle}</h2>
        <div id="posts_container">
          {this.props.data.posts.map(post => {
            return <Post data={post} />;
          })}
        </div>
      </div>
    );
  }
}

module.exports = { Postlist };
