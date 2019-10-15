import React from "react";
import "../assets/styles/login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this._validateForm = this._validateForm.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnBlur(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  _validateForm() {
    let isValid = true;
    const { username, password } = this.state;
    if (!username) {
      isValid = false;
    } else if (!password) {
      isValid = false;
    }
    return isValid;
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const isValidForm = this._validateForm();
    if (!isValidForm) {
      return false;
    }

    const { username, password } = this.state;
    if (username !== "shaadi" || password !== "123") {
      alert("Invalid Username Password Combination");
      return false;
    }
    // NOTE: submitting the form once validated
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      this._dummyAPI();
    }, 2000);
  }

  _dummyAPI = () => {
    const { history } = this.props;
    const { username } = this.state;
    sessionStorage.setItem("IsLogin", 1);
    sessionStorage.setItem("Username", username);
    history.push("/carousel");
  };

  render() {
    const { username, password, loading } = this.state;
    return (
      <section className="login-wrapper">
        <div className="left-block">
          <div className="title-wrapper">
            <div className="main-title">SHAADI.com</div>
            <div className="sub-title">Assigment</div>
          </div>
        </div>
        <div className="right-block">
          <div
            style={{ fontSize: "2rem", fontWeight: "600", color: "#f7533a" }}
          >
            Login
          </div>
          <form onSubmit={this.handleOnSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Username"
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
              />
            </div>
            <div className="action-block">
              <button disabled={loading} onClick={this.handleOnSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
