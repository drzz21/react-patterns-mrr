import React from 'react';
import TodoContainer  from './todo/TodoContainer';

/*
El patrón Presentational & Container, es patrón consistente en separar la funcionalidad de un componente, en dos componentes,
uno que se encarga del funcionamiento de la lógica y otro que se encarga de la vista del componente.
Es decir se separa interfaz visual gráfica de funcionamiento lógico.
Aquí se pueden tener tantos subcomponentes como sean, la lógica está en que el primer componente tendrá la lógica y sus 
hijos serán solo presentación.
*/

export const PresentationalContainer = () => {
	return <TodoContainer />;
};
