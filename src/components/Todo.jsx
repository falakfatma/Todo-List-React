import React, { useState } from 'react'
import List from "./List"
export default function todo() {
  const [itemName, setItemName] = React.useState("");
  const [itemKey, setItemKey] = React.useState(0);
  const [deleteItem, setdeleteItem] = useState();
  const [Item, setItem] = useState([]);
  function searchHandlerFunction(e) {
    setItemName(e.target.value)
  }


  const addItemHandlerFunction = () => {
    setItem((oldValue) => {
      return [...oldValue, itemName]
    })
    setItemName('')
  }
  const deleteItemFunction = (e) => {
    // return e
  }
  return (
    <>
      <div
        className="searchTaskBarContainer"
        placeholder="Add Item">
        <input
          className="searchTaskBarContainerSearch"
          placeholder="Add Item"
          onInput={searchHandlerFunction}
          value={itemName}
        />
        <button
          className="btn"
          onClick={addItemHandlerFunction}>
          Add
        </button>
      </div>
      {
        Item.map((Value, index) => {
          return <List
            className='listItem'
            key={index}
            id={index}
            text={Value}
            onSelect={deleteItemFunction}
          />
        })
      }
    </>
  )
}