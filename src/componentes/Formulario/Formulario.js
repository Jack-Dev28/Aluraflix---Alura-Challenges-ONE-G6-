import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [video, actualizarVideo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarCard, crearCategoria } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            descripcion,
            imagen,
            video,
            categoria
        }
        registrarCard(datosAEnviar)
    }

    const manejarNuevoCategoria = (e) => {
        e.preventDefault()
        crearCategoria({ titulo, colorPrimario: color })
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el card.</h2>
            <Campo
                titulo="Título"
                placeholder="Ingresar el título"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <ListaOpciones
                valor={categoria}
                actualizarCategoria={actualizarCategoria}
                categorias={props.categorias}
            />
            <Campo
                titulo="Imagen"
                placeholder="Ingresar enlace de la imagen"
                required
                valor={imagen}
                actualizarValor={actualizarImagen}
            />
            <Campo
                titulo="Video"
                placeholder="Ingresar enlace del video"
                required
                valor={video}
                actualizarValor={actualizarVideo}
            />
            <Campo
                titulo="Descripcion"
                placeholder="Ingresar descripcion"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoCategoria}>
            <h2>Rellena el formulario para crear el categoria.</h2>
            <Campo
                titulo="Titulo de la Nueva Categoria"
                placeholder="Ingresar titulo de la nueva categoria"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar categoria</Boton>
        </form>
    </section>
}

export default Formulario