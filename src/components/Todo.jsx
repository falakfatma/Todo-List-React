import React, { useState } from 'react'
import List from "./List"
export default function todo() {
  const [itemName, setItemName] = React.useState("");
  const [fillDataItemError, setFillDataItemError] = React.useState("");
  const [Item, setItem] = useState([]);
  function searchHandlerFunction(e) {
    setItemName(e.target.value)
  }
  const addItemHandlerFunction = () => {
    if (itemName === "") {
      setFillDataItemError("Please Fill the Data")
      return;
    }
    setItem((oldValue) => {
      return [...oldValue, itemName]
    })
    setItemName('')
  }
  const deleteItemFunction = (e) => {
    setItem((oldValue) => {
      return oldValue.filter((ele, index) => {
        return index !== e
      })
    })
  }
  return (
    <>
      <div
        className="searchTaskBarContainer">
        <div className="searchTaskBarContainerArea">
        <input
          className="searchTaskBarContainerSearch"
          placeholder="Add Item"
          onInput={searchHandlerFunction}
          value={itemName}
        />
          <p className="Error_Message Message">{fillDataItemError}</p>
        </div>
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