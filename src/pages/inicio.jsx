import {useNavigate} from "react-router-dom"
const Inicio = _ => {
	const navigate = useNavigate()
	return (
		<div className="cont_inicio">
			<div className="caja_texto_inico">
				<h1>
					administrador de <span>clientes</span>
				</h1>
				<p>
					Comienza a administrar tus pacientes ahora mismo, las tecnologias utilizadas son
					las siguientes: <span>React</span>, <span>React-router-dom</span>,
					<span>json-server</span>, <span>javascript</span>, <span>rest-Api</span>,{" "}
					<span>css-puro</span> y mas.
				</p>
			</div>

			<div className="caja_boton_inicio">
				<button role="button" type="button" onClick={() => navigate("/formulario")}>
					comienza ahora mismo
				</button>
			</div>
		</div>
	)
}
export default Inicio
