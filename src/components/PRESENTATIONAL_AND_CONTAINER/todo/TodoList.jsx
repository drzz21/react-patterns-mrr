import Todo from "./Todo";

export default function TodoList({
  items,
  onComplete,
  itemsCompleted,
  totalItems,
}) {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div>
        {itemsCompleted} of {totalItems} completed
      </div>
      {items.map((item) => (
        <Todo key={item.id} {...item} onCompleted={onComplete} />
      ))}
    </div>
  );
}