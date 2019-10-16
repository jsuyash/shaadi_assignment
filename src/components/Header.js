import React from "react";

const STYLES = {
  MAIN: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "5px",
    fontSize: "0.8rem"
  },
  LOGOUT_TEXT: {
    border: "0px",
    backgroundColor: "#fff",
    textTransform: "uppercase",
    color: "#f7533a",
    borderRadius: "3px",
    padding: "2px 10px",
    boxSadow: "0px 1px 2px #00000029",
    cursor: "pointer",
    boxShadow: "0px 1px 3px #d6d6d69c"
  }
};

export const Header = props => {
  const { onLogoutClick } = props;
  const username = !!sessionStorage.getItem("Username")
    ? sessionStorage.getItem("Username")
    : "";
  return (
    <header style={STYLES.MAIN}>
      <span style={STYLES.LOGOUT_TEXT} title={username} onClick={() => onLogoutClick()}>
        Logout
      </span>
    </header>
  );
};
