import React from "react";
import "../styles/App.css";
import Loader from "./Loader";

const LoadingStatus = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
};

const App = () => {
  const BASE_URL = "https://reqres.in/api/users";
  const [userId, setUserId] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(LoadingStatus.NOT_STARTED);
  const [userData, setUserData] = React.useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const handleOnClick = () => {};

  const onChangeHandler = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div id="main">
      <label htmlFor="number">Enter an id for the user between 1 to 100</label>
      <input
        type="number"
        value={userId}
        onChange={onChangeHandler}
        id="input"
        min={1}
        max={10}
      />
      <button id="btn" onClick={handleOnClick}>
        Get User
      </button>

      <div id="data">
        <h1>Click on the button to get the user</h1>
        <h4 id="id">{userData.id}</h4>
        <h4 id="email">{userData.email}</h4>
        <h4 id="first_name">{userData.first_name}</h4>
        <h4 id="last_name">{userData.last_name}</h4>
        <h4 id="avatar">{userData.avatar}</h4>
      </div>
    </div>
  );
};

export default App;
