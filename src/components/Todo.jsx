import React, { useState } from 'react'
import List from "./List"
export default function todo() {
  const [ItemName, setItemName] = React.useState("");
  const [listItemCancle, setlistItemCancle] = useState(0);
  const [Item, setItem] = useState([]);
  function searchHandlerFunction(e) {
    setItemName(e.target.value)
  }
  function addItemHandlerFunction(event) {
    console.log(Item)
    // setItem(Item)
  }
  return (
    <>
      <div
        className="searchTaskBarContainer"
        placeholder="Add Item"
      >
        <input
          className="searchTaskBarContainerSearch"
          placeholder="Add Item"
          onInput={searchHandlerFunction}
          value={ItemName}
        />
        <button
          className="btn"
          onClick={addItemHandlerFunction}>
          Add
        </button>
      </div>
      <li>{ItemName}</li>
      {/* <List /> */}
    </>
  )
}