import React, { useState } from 'react';

const Formulario = () => {
    const [modoEdicion, setModoEdicion] = useState(false)
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    var signo;


    // const horoscopo = ({
    //     "Acuario" : "Entienda que cuando uno determina sus propios objetivos, es de suma importancia sostener la claridad para poder elegir el camino adecuado. Piense antes de actuar.",
    //     "Aries" : "Entienda que para conseguir buenos resultados y los éxitos deseados, deberá operar de una forma más positiva. Abandone la negatividad que tanto lo caracteriza.",
    //     "Capricornio" : "Ocúpese de los asuntos y trate de resolverlos lo antes posible. Deje de involucrase en situaciones complicadas que no lo involucran personalmente.",
    //     "Escorpión":"Transitará por una nueva etapa en la vida, donde podrá unir la esperanza y la fe hasta provocar una mayor confianza en su camino interior. Crea en usted mismo.",
    //     "Géminis" : "Sepa que le resultará mucho más fácil todo lo que se proponga, si se toma las cosas con tranquilidad en esta jornada. Será inútil que se altere y se ponga mal.",
    //     "Leo" : "Esté preparado, ya que hoy recibirá un juicio de alguien no muy cercano pero que lo llevará a replantearse algunas situaciones centrales de su vida.",
    //     "Libra" : "Sepa que aunque se le presenten diversas opciones cuando tenga que decidir, deberá utilizar los recursos apropiados para lograr las metas de una forma exitosa.",
    //     "Piscis"  : "Esté preparado, ya que podría comenzar el día con algún contratiempo. Procure no abandonar la serenidad que lo caracteriza y avance poco a poco.",
    //     "Sagitario" :"Sepa que todo lo que deba hacer hoy, le requerirá de suma paciencia. Será el momento para que trate de reflexionar antes de accionar sin pensar las consecuencias.",
    //     "Tauro" : "Sepa que no existen los resultados sin haber sufrido algún fracaso en el camino. Muchas veces nos ofrecen una nueva oportunidad para cumplir nuestras metas.",
    //     "Virgo" : "Sepa que necesitará trabajar su percepción natural. De esta forma, tendrá más chances para alcanzar todos los éxitos deseados y no cometer ningún error.",
    // })

    function capturarMes(e) {
        setMes(e.target.value);
    };

    const signoZo = () => {
        setModoEdicion(true)
        setDia('')
        setMes('')
        console.log(mes)
        console.log(dia)

    }

    return (
        <div className="container form card  col-xs-3 col-sm-8 col-md-8 col-lg-8">
            <p className="display-4 text-center">¿Cual es mi Horoscopo?</p>
            <form onSubmit={modoEdicion ? signoZo : signoZo}>
                <div className="form-group">
                    <label className="h1">
                        {
                            modoEdicion ? 'Signo Zodiacal' : 'Día'
                        }
                    </label>
                    <div>
                        {
                            modoEdicion ?
                                ((() => {
                                        switch (mes) {
                                            case "ene":
                                                signo = (dia >= "21" ? 'Acuario' : 'Capricornio');
                                                break;
                                            case "feb":
                                                signo = (dia >= "19" ? 'Piscis' : 'Acuario');
                                                break;
                                            case "mar":
                                                signo = (dia >= "21" ? 'Aries' : 'Piscis');
                                                break;
                                            case "abr":
                                                signo = (dia >= "21" ? 'Tauro' : 'Aries');
                                                break;
                                            case "may":
                                                signo = (dia >= "22" ? 'Géminis' : 'Tauro');
                                                break;
                                            case "jun":
                                                signo = (dia >= "22" ? 'Cáncer' : 'Géminis');
                                                break;
                                            case "jul":
                                                signo = (dia >= "23" ? 'Leo' : 'Cáncer');
                                                break;
                                            case "ago":
                                                signo = (dia >= "24" ? 'Virgo' : 'Leo');
                                                break;
                                            case "sep":
                                                signo = (dia >= "24" ? 'Libra' : 'Virgo');
                                                break;
                                            case "oct":
                                                signo = (dia >= "24" ? 'Escorpión' : 'Libra');
                                                break;
                                            case "nov":
                                                signo = (dia >= "23" ? 'Sagitario' : 'Escorpión');
                                                break;
                                            default:
                                                signo = (dia >= "22" ? 'Capricornio' : 'Sagitario');
                                                break;
                                        }
                                        console.log(signo)
                                    })()
                                ) :
                                (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={dia}
                                        placeholder="Ingrese el dia"
                                        onChange={e => setDia(e.target.value)}
                                    />
                                )
                        }
                    </div>
                </div>

                <div className="form-group">
                    <label className="h1">
                        {
                            modoEdicion ? 'Horoscopo' : 'Mes'
                        }
                    </label>
                    <div>
                        {
                            modoEdicion ?
                                (
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati praesentium rerum voluptatem dolor, enim veritatis sapiente eaque consequuntur possimus commodi distinctio omnis cumque minima voluptatum nihil facilis soluta quibusdam.</p>
                                ) :
                                (
                                    <select onChange={capturarMes} multiple className="form-control">
                                        <option value="ene">Enero</option>
                                        <option value="feb">Febrero</option>
                                        <option value="mar">Marzo</option>
                                        <option value="abr">Abril</option>
                                        <option value="may">Mayo</option>
                                        <option value="jun">Junio</option>
                                        <option value="jul">Julio</option>
                                        <option value="ago">Agosto</option>
                                        <option value="sep">Septiembre</option>
                                        <option value="oct">Octubre</option>
                                        <option value="nov">Noviembre</option>
                                        <option value="dic">Diciembre</option>
                                    </select>
                                )
                        }
                    </div>

                    <br />
                    <div className="btn-group" role="group" aria-label="Basic example">
                        {
                            modoEdicion ? (
                                <a
                                    href="!#"
                                    className="btn btn-secondary"
                                >
                                    Ingresar otra fecha
                                </a>
                            ) :
                                (
                                    <button
                                        onClick={() => signoZo()}
                                        type="submit"
                                        className="btn btn-secondary"
                                    >
                                        Aceptar
                                    </button>
                                )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Formulario;