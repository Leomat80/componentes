import React, { useState } from "react";

export const SuperNuevo = () => {
  const [nombre, setNombre] = useState("LEONARDO");

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  return (
    <div>
      <p> mi id es: {nombre}</p>
      <button onClick={(e) => cambiarNombre("LEONARDO FABIO MATEUS HERRERA")}>
        Cambiar nombre
      </button>
    </div>
  );
};
