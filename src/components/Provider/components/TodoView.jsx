import TodoList from './TodoList';
import { useAppContext } from './Store';

export default function TodosView() {
  //extraemos los items de nuestro contexto
	const {items} = useAppContext();

  //inyectamos los items en el componente TodoList
	return <TodoList items={items} />;
}
