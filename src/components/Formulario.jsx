import React, { useState } from 'react';

function switchSigno(mes, dia) {
    switch (mes) {
        case "ene":
            return (dia >= "21" ? 'Acuario' : 'Capricornio');
        case "feb":
            return (dia >= "19" ? 'Piscis' : 'Acuario');

        case "mar":
            return (dia >= "21" ? 'Aries' : 'Piscis');

        case "abr":
            return (dia >= "21" ? 'Tauro' : 'Aries');

        case "may":
            return (dia >= "22" ? 'Géminis' : 'Tauro');

        case "jun":
            return (dia >= "22" ? 'Cáncer' : 'Géminis');

        case "jul":
            return (dia >= "23" ? 'Leo' : 'Cáncer');

        case "ago":
            return (dia >= "24" ? 'Virgo' : 'Leo');

        case "sep":
            return (dia >= "24" ? 'Libra' : 'Virgo');

        case "oct":
            return (dia >= "24" ? 'Escorpión' : 'Libra');

        case "nov":
            return (dia >= "23" ? 'Sagitario' : 'Escorpión');

        default:
            return (dia >= "22" ? 'Capricornio' : 'Sagitario');

    }
}
function horospocoPorSigno(signo) {
    switch (signo) {
        case "Acuario" :
            return  "Entienda que cuando uno determina sus propios objetivos, es de suma importancia sostener la claridad para poder elegir el camino adecuado. Piense antes de actuar."
            case "Aries" :
                return "Entienda que para conseguir buenos resultados y los éxitos deseados, deberá operar de una forma más positiva. Abandone la negatividad que tanto lo caracteriza."
            case "Capricornio" :
                return "Ocúpese de los asuntos y trate de resolverlos lo antes posible. Deje de involucrase en situaciones complicadas que no lo involucran personalmente."
            case "Escorpión":
                return "Transitará por una nueva etapa en la vida, donde podrá unir la esperanza y la fe hasta provocar una mayor confianza en su camino interior. Crea en usted mismo."
            case "Géminis" :
                return "Sepa que le resultará mucho más fácil todo lo que se proponga, si se toma las cosas con tranquilidad en esta jornada. Será inútil que se altere y se ponga mal."
            case "Leo" :
                return  "Esté preparado, ya que hoy recibirá un juicio de alguien no muy cercano pero que lo llevará a replantearse algunas situaciones centrales de su vida."
            case "Libra" :
                return  "Sepa que aunque se le presenten diversas opciones cuando tenga que decidir, deberá utilizar los recursos apropiados para lograr las metas de una forma exitosa."
            case "Piscis"  :
                return "Esté preparado, ya que podría comenzar el día con algún contratiempo. Procure no abandonar la serenidad que lo caracteriza y avance poco a poco."
            case "Sagitario" :
                return "Sepa que todo lo que deba hacer hoy, le requerirá de suma paciencia. Será el momento para que trate de reflexionar antes de accionar sin pensar las consecuencias."
            case "Tauro" :
                return "Sepa que no existen los resultados sin haber sufrido algún fracaso en el camino. Muchas veces nos ofrecen una nueva oportunidad para cumplir nuestras metas."
            case "Virgo" :
                return "Sepa que necesitará trabajar su percepción natural. De esta forma, tendrá más chances para alcanzar todos los éxitos deseados y no cometer ningún error."

        default:
            return  "";

    }
}


const Formulario = () => {
    const [modoEdicion, setModoEdicion] = useState(false)
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [signo, setSigno] = useState('')
    const [horoscopo, setHoroscopo] = useState('')
    var signo1;




    function capturarMes(e) {
        setMes(e.target.value);
    };

    const signoZo = () => {
        setModoEdicion(true)
        setDia('')
        setMes('')
        signo1 =switchSigno(mes, dia)
        setSigno(signo1)
        setHoroscopo(horospocoPorSigno(signo1))

    }
    console.log(signo)
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
                            modoEdicion ?<h3>{signo}</h3>
                                :
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
                                    <p>{horoscopo}</p>
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