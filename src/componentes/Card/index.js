import "./Card.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import React from "react";
import ReactPlayer from "react-player";

const Card = (props) => {
  const { nombre, descripcion, imagen, video, categoria, id, fav } = props.datos;
  const { colorPrimario, eliminarCard, like } = props;

  return (
    <div className="card">
      <AiFillCloseCircle className="eliminar" onClick={() => eliminarCard(id)} />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={imagen} alt={nombre} />
      </div>
      <div className="video-container">
        <ReactPlayer className="video-player" url={video} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{descripcion}</h5>
        {fav? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Card;