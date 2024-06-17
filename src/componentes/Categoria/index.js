import "./Categoria.css"
import Card from "../Card"
import hexToRgba from 'hex-to-rgba';

const Categoria = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { cards, eliminarCard, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }


    const estiloTitulo = { borderColor: colorPrimario}

    return <>
        {
            cards.length > 0 &&
            <section className="categoria" style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo} ><span>{titulo}</span></h3>
                <div className="cards">
                    {
                        cards.map((card, index) => <Card
                            datos={card}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarCard={eliminarCard}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Categoria