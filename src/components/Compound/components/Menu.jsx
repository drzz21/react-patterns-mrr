import Store, { useAppContext } from "./Store";

/*
Exportamos nuestra función por defecto de Menu, la cual recibe children.
En este caso, children es el componente Menu.Item que se encuentra dentro de Menu.
Pero irá dentro de MenuContainer para poder acceder al contexto.
*/
export default function Menu({ children }) {
  return (
    <Store>
      <MenuContainer>{children}</MenuContainer>
    </Store>
  );
}

/**
 * MenuContainer es el componente que se encarga de mostrar los menu item y encima de ellos 
 * el elemento seleccionado.
 * Hacemos uso del contexto en el contenedor, y este contexto tambien se leerá en cada
 * elemento del menu
 */
function MenuContainer({ children }) {
  //se podría importar todo de esta forma pero es más legible desestructurar
  // const store = useAppContext();
  const {showSelected} = useAppContext();

  return (
    <>
      {/* <div>{store.showSelected()}</div> */}
      <div>{showSelected()}</div>
      <ul>{children}</ul>
    </>
  );
}

/**
 * Creamos el componente menú item, solo recibe el título del elemento.
 */
function MenuItem({ title }) {
  // Hacemos uso del contexto para poder acceder a la función onSelect
  const {onSelect} = useAppContext();

  // Creamos la función que se ejecutará al hacer click en el elemento
  function handleClick(e) {
    e.preventDefault();
    onSelect(title);
  }
  return (
    <li>
      {/*cuando hacemos click sobre un tag ejecutamos el método para 
      actualizar la propiedad seleccionada*/}
      <a href="#" onClick={handleClick}>
        {title}
      </a>
    </li>
  );
}

//Vinculamos el componente MenuItem al componente Menu
//A su propiedad Item para poder usarlo dentro de Menu de la forma <Menu.Item title="" />
Menu.Item = MenuItem;