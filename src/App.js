import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';
import Banner from './componentes/Banner/Banner';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [cards, actualizarCards] = useState([{
    id: uuid(),
    categoria: "FRONT END",
    imagen: "https://i.ytimg.com/vi/PztCEdIJITY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJWqQzWreQLTp7q4esMjlV1roLTA",
    video: "https://www.youtube.com/watch?v=PztCEdIJITY",
    nombre: "Cuándo usar let, var y const?",
    descripcion: "Descripción del video",
    fav: true
  },
  {
    id: uuid(),
    categoria: "FRONT END",
    imagen: "https://i.ytimg.com/vi/GJfOSoaXk4s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfCWN4npfWUBdrGczCKogB-Qvi1g",
    video: "https://www.youtube.com/watch?v=GJfOSoaXk4s",
    nombre: "¿Qué es JavaScript?",
    descripcion: "Descripción del video",
    fav: false
  },
  {
    id: uuid(),
    categoria: "FRONT END",
    imagen: "https://i.ytimg.com/vi/rpvrLaBQwgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoKpoRlVQCz_RrJKrwuA9onAd7Rw",
    video: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
    nombre: "Equipo Front End",
    descripcion: "Descripción del video",
    fav: false
  },
  {
    id: uuid(),
    categoria: "BACK END",
    imagen: "https://i.ytimg.com/vi/t-iqt1b2qqk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDovSFByVwRvRdwIhaZYSJUGw2Rog",
    video: "https://www.youtube.com/watch?v=t-iqt1b2qqk",
    nombre: "Spring Framework",
    descripcion: "Descripción del video",
    fav: false
  },
  {
    id: uuid(),
    categoria: "BACK END",
    imagen: "https://i.ytimg.com/vi/cLLKVd5CNLc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDF192TpYhfpj_db3MARwWCgVFBpQ",
    video: "https://www.youtube.com/watch?v=cLLKVd5CNLc",
    nombre: "¿Qué es SQL y NoSQL?",
    descripcion: "Descripción del video",
    fav: false
  },
  {
    id: uuid(),
    categoria: "BACK END",
    imagen: "https://i.ytimg.com/vi/EoPvlE85XAQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBLywQFxiv6SwpRuISBiQyIFdR-A",
    video: "https://www.youtube.com/watch?v=EoPvlE85XAQ",
    nombre: "Simplificando tu código en Java: Conoce los enum ",
    descripcion: "Descripción del video",
    fav: false
  },
  {
    id: uuid(),
    categoria: "INNOVACION Y GESTION",
    imagen: "https://i.ytimg.com/vi/vhwspfvI52k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxc_0rcRKCUTqYZXq2YUcjczMJNg",
    video: "https://www.youtube.com/watch?v=vhwspfvI52k",
    nombre: "¿Qué son las Soft Skills?",
    descripcion: "Descripción del video",
    fav: false
  },
  {
    id: uuid(),
    categoria: "INNOVACION Y GESTION",
    imagen: "https://i.ytimg.com/vi/YhR7Zp8NUzE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApSY-UYiv7541vDw1U-p_iqiq-VA",
    video: "https://www.youtube.com/watch?v=YhR7Zp8NUzE",
    nombre: "7 Soft Skills más deseadas por las empresas    ",
    descripcion: "Descripción del video",
    fav: false
  },
  {
    id: uuid(),
    categoria: "INNOVACION Y GESTION",
    imagen: "https://i.ytimg.com/vi/6N3OkLCfK-0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHL_X4Hc7j2GSNcclFDT33KV5USQ",
    video: "https://www.youtube.com/watch?v=6N3OkLCfK-0",
    nombre: "¿Qué son las metodologias ágiles?",
    descripcion: "Descripción del video",
    fav: false
  }
])

  const [categorias, actualizarCategorias] = useState([
    {
      id: uuid(),
      titulo: "FRONT END",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "BACK END",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "INNOVACION Y GESTION",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar card

  const registrarCard = (card) => {
    console.log("Nuevo card", card)
    //Spread operator
    actualizarCards([...cards, card])
  }

  //Eliminar card
  const eliminarCard = (id) => {
    console.log("Eliminar card", id)
    const nuevosCards = cards.filter((card) => card.id !== id)
    actualizarCards(nuevosCards)
  }

  //Actualizar color de categoria
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const categoriasActualizados = categorias.map((categoria) => {
      if (categoria.id === id) {
        categoria.colorPrimario = color
      }

      return categoria
    })

    actualizarCategorias(categoriasActualizados)
  }

  //Crear categoria
  const crearCategoria = (nuevoCategoria) => {
    console.log(nuevoCategoria)
    actualizarCategorias([...categorias, { ...nuevoCategoria, id: uuid() }])
  }

  const like = (id) => {
    console.log("like", id)
    const cardsActualizados = cards.map((card) => {
      if (card.id === id) {
        card.fav = !card.fav
      }
      return card
    })

    actualizarCards(cardsActualizados)
  }

  return (
    <div>
      <Header />
      <Banner />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          categorias={categorias.map((categoria) => categoria.titulo)}
          registrarCard={registrarCard}
          crearCategoria={crearCategoria}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        categorias.map((categoria) => <Categoria
          datos={categoria}
          key={categoria.titulo}
          cards={cards.filter(card => card.categoria === categoria.titulo)}
          eliminarCard={eliminarCard}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
