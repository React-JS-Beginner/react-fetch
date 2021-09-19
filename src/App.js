import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React Devs</h2>
      <div>
        <EveryUser></EveryUser>
      </div>
    </div>
  );
}

function EveryUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25")
      // fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="all-users">
      {users.map((user) => (
        <User
          name={user.name.first}
          country={user.location.country}
          phone={user.phone}
          img={user.picture.large}
        ></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="profile-box">
      <div className="circle">
        <div>
          <img src={props.img} alt="" />
        </div>
      </div>

      <div className="infos">
        <p>
          <strong>Name :</strong> {props.name}
        </p>
        <p>
          <strong>Country :</strong> {props.country}
        </p>
        <p>
          <strong>Phone :</strong> {props.phone}
        </p>
      </div>
    </div>
  );
}

export default App;
