// import React from "react";
import './Cards.css'

import { useEffect } from "react";
import { useState } from "react";

function Cards() {
  const [listaCards, setListaCards] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  // function leerServicio (){

  // }

  const leerServicio = () => {
    const rutaServicio = "https://rickandmortyapi.com/api/character";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaCards(data.results);
      });
  };

  return (
    <section className="padded">
      <div className="container">
        <h2>Cards</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Last Known location</th>
              <th>First seen in</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            {listaCards.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.status}-{item.species}</td>
                <td>{item.origin.name}</td>
                <td>{item.location.name}</td>
                <td><img className="imgItem" src={item.image} alt={item.img} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Cards;
