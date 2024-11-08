import React from "react";
import Inicio from "../../components/Inicio/Inicio";
import Cursos from "../Cursos/Cursos";
import Comentarios from "../Comentarios/Comentarios";

function HomeContainer() {
  return (
    <div>
      <Inicio />
      <Cursos />
      <Comentarios />
    </div>
  );
}

export default HomeContainer;
