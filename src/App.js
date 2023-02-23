// import logo from "./logo.svg";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));

  const onSearchChange = (e) => {
    setSearchString(e.target.value.toLowerCase());
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandeler={onSearchChange} placeholder='search monster' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
