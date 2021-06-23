// import { useAuth } from "../../context/AuthContext";
import React, { useState, useEffect } from "react";

const url =
  "https://api.github.com/search/users?q=followers%3A%3E%3D1000&per_page=20&fbclid=IwAR3veZZejet3chg7BFQJw85a377KnWBADd5cb6FoxdEsNGsA9zEX44HCEqk";

const Dashboard = () => {
  // const { logout, user } = useAuth();
  const [data, setData] = useState([]);
  const getData = async () => {
    const users = await fetch(url);
    const getting = await users.json();
    setData(getting.items);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className="cards">
      {data.map((item) => {
        const { avatar_url, login, id, followers_url } = item;
        return (
          <div className="git" key={id}>
            <img className="photo" src={avatar_url} alt="person" />
            <h1>{login}</h1>
            <h2>{followers_url}</h2>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            {/* <button onClick={getData}>next</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
