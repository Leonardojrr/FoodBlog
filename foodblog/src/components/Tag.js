let React = require("react");
require("../css/components-styles/Tag.css");

class Tag extends React.Component {
  classtag = tag => {
    switch (tag) {
      case "grill":
        return (
          <div id="tag" className="grill">
            <span>{tag}</span>
          </div>
        );
      case "salad":
        return (
          <div id="tag" className="salad">
            <span>{tag}</span>
          </div>
        );
      case "party":
        return (
          <div id="tag" className="party">
            <span>{tag}</span>
          </div>
        );
      case "cool":
        return (
          <div id="tag" className="cool">
            <span>{tag}</span>
          </div>
        );
      case "meat":
        return (
          <div id="tag" className="meat">
            <span>{tag}</span>
          </div>
        );
      case "recipe":
        return (
          <div id="tag" className="recipe">
            <span>{tag}</span>
          </div>
        );
      case "fastfood":
        return (
          <div id="tag" className="fastfood">
            <span>{tag}</span>
          </div>
        );
      case "tips":
        return (
          <div id="tag" className="tips">
            <span>{tag}</span>
          </div>
        );
      case "spicy":
        return (
          <div id="tag" className="salad">
            <span>{tag}</span>
          </div>
        );
      default:
        return (
          <div id="tag" className="no_exist">
            <span>No exist</span>
          </div>
        );
    }
  };

  render() {
    return this.classtag(this.props.tag);
  }
}

module.exports = { Tag };
