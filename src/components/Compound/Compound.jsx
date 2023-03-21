/*
El patrón Compound es un patrón en el cual creamos componentes que se componen entre sí para crear una interfaz de usuario más compleja.
En este patrón, cada componente se encarga de una parte de la interfaz de usuario y se comunica con los demás componentes a través de props.
Los componentes no pueden funcionar por separado, sino que deben funcionar juntos para crear una interfaz de usuario completa.
Un ejemplo sería por ejemplo en HTML los elementos select.
En select definimos los option que deben ir dentro del select para que funcione.
El select no funciona por si solo, requiere de los option para funcionar.
<select name="country"
	<option value="1">Argentina</option>
	<option value="2">Brasil</option>
	<option value="3">Chile</option>
</select>
*/

import Menu from "./components/Menu";

export const Compound = () => {
	return (
		<>
			<h2>Compound</h2>
			<Menu>
				<Menu.Item title="Elemento 1" />
				<Menu.Item title="Elemento 2" />
				<Menu.Item title="Elemento 3" />
				<Menu.Item title="Elemento 4" />
			</Menu>
		</>
	);
};
