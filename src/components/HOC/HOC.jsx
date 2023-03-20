import React from 'react';
import withSearch  from './withSearch';
import ProductList from './product/productList';
import TodoList from './todo/todoList';

//En el patrón HOC (High Order Component) se crea un componente que es enviado a
//otro componente como parámetro y este componente retorna un componente nuevo.
//Un ejemplo de aplicación de uso es por ejemplo si tenemos un HOC que agrega una
//barra de búsqueda a otro componente, para poder agregar esta barra de búsqueda
//solo tendríamos que enviar el componente al que queremos agregarle la barra de
// búsqueda como parámetro al HOC y este nos retornaría un componente nuevo con
//esta funcionalidad

const products = [
	{
		id: 0,
		title: 'carne',
	},
	{
		id: 1,
		title: 'leche',
	},
	{
		id: 2,
		title: 'verduras',
	},
];
const todos = [
	{
		id: 0,
		title: 'hacer tarea',
		completed: false,
	},
	{
		id: 1,
		title: 'crear video',
		completed: true,
	},
	{
		id: 2,
		title: 'limpiar casa',
		completed: false,
	},
];

const ProductListWithSearch = withSearch(ProductList, products);
const TodoListWithSearch = withSearch(TodoList, todos);

export const HOC = () => {
	return (
		<div style={{textAlign:'center'}}>
			<h1>HOC</h1>
			<ProductListWithSearch />
			<TodoListWithSearch />
		</div>
	);
};
