import React, {useState} from 'react';

export const MiComponente = () => {

    // let nombre = "inLeomatCode";
    let peso = "80 kilos";

    const[nombre, setNombre] = useState("LEONARDO")

    let ingredientes = [
        "leche",
        "arina",
        "elevadura",
        " uvas pasas",
        "matequilla"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

  return (
    <div>
      <h1> entendiendo componentes a la fuerza</h1>
      <p> paso a paso</p>
      <p>
        {" "}
        mi id es: <strong className={nombre.length >=6 ? 'verde' : 'rojo' }>{nombre}</strong>{" "}
      </p>
      <p> mi peso es: {peso}</p>

      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder="digita el nombre"
      />

      <button onClick={(e) => cambiarNombre("LEONARDO FABIO MATEUS HERRERA")}>
        Cambiar nombre
      </button>

      <h2> ingredientes:</h2>
      <ul>
        {ingredientes.map((ingredientes, indice) => {
          return <li key={indice}>{ingredientes}</li>;
        })}
      </ul>
    </div>
  );
}
