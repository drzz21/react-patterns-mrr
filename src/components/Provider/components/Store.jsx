import { createContext, useContext, useState } from "react";

// 1. Definicion de contexto
//Es decir su creación, no inicialización, solo lo definimos
const AppContext = createContext({
  // items: [],
  // onComplete: (id) => {},
});

// 2.Implementación
/*
Creamos el componente principal, este tiene los datos de los items y el metodo on complete que cambia el estado
a completado de cada item, recibe tambien un children que es el componente que se va a renderizar
*/
export default function Store({ children }) {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Lavar la ropa",
      completed: false,
    },
    {
      id: 1,
      title: "Pasear a Coqui 🐶",
      completed: true,
    },
    {
      id: 2,
      title: "Terminar tutorial",
      completed: false,
    },
  ]);

  function onComplete(id) {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    setItems([...items]);
  }

  /*
  Retornamos el componente hijo, encerrado en el provider para que tenga acceso al estado del contexto
  asignamos al valor del contexto los items y el metodo onComplete para que sus hijos lo puedan acceder
  */
  return (
    <AppContext.Provider
      value={{
        items,
        onComplete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

//exportamos la función para acceder a las propiedades del contexto en los componentes hijos
export function useAppContext() {
  return useContext(AppContext);
}