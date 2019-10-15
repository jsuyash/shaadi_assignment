import React from "react";

const STYLES = {
  MAIN: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "5px",
    fontSize: "0.8rem"
  }
};

export const Header = props => {
  const { onLogoutClick } = props;
  const username = !!sessionStorage.getItem("Username")
    ? sessionStorage.getItem("Username")
    : "";
  return (
    <header style={STYLES.MAIN}>
      <span title={username} onClick={() => onLogoutClick()}>
        Logout
      </span>
    </header>
  );
};
