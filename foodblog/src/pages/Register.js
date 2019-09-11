const React = require("react");

class Register extends React.Component {
  state = {
    loading: true,
    data: [],
    err: false
  };

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {
    const users = await fetch("/users", {
      method: "GET"
    }).then(resp => resp.json());
    if (users.length !== 0) {
      this.setState({ loading: false, data: users });
    } else {
      this.setState({ loading: false, err: true });
    }
  }

  render() {
    if (this.state.loading === true) {
      return <h1>loading...</h1>;
    }
    return (
      <div>
        {this.state.data.data.map(user => {
          return <h1>{user.username}</h1>;
        })}
      </div>
    );
  }
}

module.exports = { Register };
