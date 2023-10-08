export default function ListItem(props) {
  return (
    <div className="listItem">
      <div>{props.text}</div>
      <div className="listItemEditArea">
        <span
          className="listItemEditAreaLists edit"
          onClick={() => {
            props.onEdit(props.id)
          }}>
          E
        </span>
        <span
          className="listItemEditAreaLists danger"
          onClick={() => {
            props.onSelect(props.id)
          }}>
          X
        </span>
      </div>
    </div>
  )
}