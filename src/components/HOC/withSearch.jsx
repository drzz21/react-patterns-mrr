import { useState } from 'react';

export default function withSearch(Component, dataset) {
	/*
	Esta función recibe un componente como parámetro y retorna uno nuevo con algo añadido.
	En este caso se retorna el componente con un input que sirve como barra de búsqueda.
	*/
	return function () {
		const [query, setQuery] = useState('');

		function handleChange(e) {
			setQuery(e.target.value);
		}

		return (
			<div
				style={{
					padding: '30px',
					border: '4px solid black',
					margin: '5px',
				}}
			>
				{/* 
				Definimos el input que servirá como barra de búsqueda y le pasamos como propiedad la variable query,
				esta variable, esta variable se envia al componente que se recibe como propiedad en este componente,
				y dentro de ese componente se puede usar para filtrar los datos que se muestran.
				*/}
				
				<input onChange={handleChange} value={query} />
				<Component query={query} dataset={dataset} />
			</div>
		);
	};
}
