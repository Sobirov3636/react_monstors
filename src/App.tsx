// import logo from "./logo.svg";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";
import { ChangeEvent, useEffect, useState } from "react";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
