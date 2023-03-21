import { useState, useEffect, useMemo } from 'react';
import TodoList from './TodoList';

/*
Este es el componente contenedor, es decir, la lógica del componente se encontrará aquí, los métodos que requiera, la declaración de estados,
y otras cosas de información se encontrarán aquí, al mismo tiempo el componente tiene componentes hijos a los cuales enviará la 
información para que la muestren.
*/

const data = [
	{
		id: 0,
		title: 'Lavar la ropa',
		completed: false,
	},
	{
		id: 1,
		title: 'Pasear a Firulais 🐶',
		completed: true,
	},
	{
		id: 2,
		title: 'Terminar curso React',
		completed: false,
	},
];

export default function TodoContainer() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		//Obtener y asignar datos
		setItems(data);
	}, []);

	/**
	 * Cambia el estado de completed de la lista de items que estan en el estado de
	 * este componente, que es el componente de lógica
	 * @param {number} id
	 */
	function handleComplete(id) {
		const index = items.findIndex((item) => item.id === id);
		items[index].completed = !items[index].completed;
		setItems([...items]);
	}

	//Usamos useMemo para que no se vuelva a calcular el valor de itemsCompleted, en cada renderizado.
	const itemsCompleted = useMemo(() => {
		return items.filter((item) => item.completed).length;
	});

	return (
		<TodoList
			items={items}
			onComplete={handleComplete}
			itemsCompleted={itemsCompleted}
			totalItems={items.length}
		/>
	);
}
