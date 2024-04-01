import React, { useState } from "react";

export const DigitaNombre = () => {
  const [nombre, setNombre] = useState("LEONARDO");

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  return (
    <div>
      <p>
        {" "}
        mi id es:{" "}
        <strong className={nombre.length >= 6 ? "verde" : "rojo"}>
          {nombre}
        </strong>
      </p>
      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder="digita el nombre"
      />
    </div>
  );
};
