import React from "react";
import { connect } from "react-redux";

export const Home = (props) => {
  const { username } = props;

  return (
    <div class="welcome-form">
      <h3>Welcome, {username}</h3>
      <h4>What do you like to do today?</h4>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
