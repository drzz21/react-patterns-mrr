//importamos nuestra funcion para usar el contexto y sus propiedades
import { useAppContext } from './Store';
export default function Todo({ id, title, completed }) {
  //extraemos el metodo onComplete de nuestro contexto
  //solo ocupamos eso porque el valor de los items lo recibimos como prop
	const { onComplete } = useAppContext();
	return (
		<div>
			<div>
				<input
					type="checkbox"
					checked={completed}
					value={completed}
					onChange={() => onComplete(id)}
				/>
				{title}
			</div>
		</div>
	);
}
