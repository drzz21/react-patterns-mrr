import Todo from "./Todo";

export default function TodoList({ items }) {
  return (
    <div>
      {/* Recibimos los items e iteramos sobre ellos enviando su información a un componente TODO donde se 
      va a renderizar */}
      {items.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
}