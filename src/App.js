import "./App.css";
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState([1]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=pt&category=${category}&apiKey=913ea3a91a9549e0aa677c11574d7109`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <div className="App">
      <h1 className="title">Noticias in English</h1>
      <Menu
        active={active}
        setActive={setActive}
        setCategory={setCategory}
      ></Menu>
      <NewsGrid items={items}></NewsGrid>
    </div>
  );
}

export default App;
