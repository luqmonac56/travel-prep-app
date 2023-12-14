import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import ParkingList from "./components/ParkingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAllItems(){
    const confirmed = window.confirm("Do you really want to clear all?")
    if(confirmed){
      setItems([])
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        onDeleteItem={handleDelete}
        onDeleteAllItems={handleDeleteAllItems}
        onToggle={handleToggle}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
