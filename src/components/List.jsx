export default function ListItem(props) {
  const deleteItemFunc = (e)=>{
    console.log(e.target.id)
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
          onClick={deleteItemFunc}
          id = {props.id}>
          X
        </span>
      </div>
    </div>
  )
}