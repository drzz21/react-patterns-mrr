import React from 'react';
import Store from './components/Store';
import TodosView from './components/TodoView';

/*
Se usa el patrón provider para tener un estado global centralizado que se comparte 
en varios componentes que consumen al provider, esto nos ayuda a evitar pasar props
de un componente a otro evitando lo que se conoce como prop drilling.
*/

export const Provider = () => {
	return (
		//El componente Store tiene definido el provider, por lo tanto sus hijos tendrán 
		//acceso al estado global definido en ese provider, en este caso TodosView
		<Store>
			<h1>Provider</h1>
			<TodosView />
		</Store>
	);
};
