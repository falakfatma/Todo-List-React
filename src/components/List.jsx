export default function ListItem(props) {
  const deleteItemFunc = (e)=>{
    return e.target.id
  }
  return (
    <div className="listItem">
      <div>{props.text}</div>
      <div className="listItemEditArea">
        <span
          className="listItemEditAreaLists edit">
          E
        </span>
        <span
          className="listItemEditAreaLists danger"
          onClick={() => {
            props.onSelect(props.id)
          }}
          id = {props.id}
  
          >
          X
        </span>
      </div>
    </div>
  )
}