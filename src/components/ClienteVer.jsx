import {useLoaderData, useNavigate} from "react-router-dom"
import {clientesVer} from "../data/clientes"
export async function loader({params}) {
	const clienteVer = await clientesVer(params.ver)
	return clienteVer
}
const ClienteVer = _ => {
	const clienteVer = useLoaderData()
	const navigate = useNavigate()

	console.log(clienteVer)
	return (
		<div className="cont_cliente">
			<div role="button" className="caja_boton_ver">
				<button type="button" onClick={() => navigate(-1)}>
					salir
				</button>
			</div>
			<div className="caja_cliente_ver">
				<h3>
					<span>cliente:</span>{" "}{clienteVer?.nombre}
				</h3>
				<p>empresa:{" "}{clienteVer?.empresa}</p>
				<p>nombre:{" "}{clienteVer?.nombre}</p>
				<p>email:{" "}{clienteVer?.email}</p>
				<p>telefono:{" "}{clienteVer?.telefono}</p>
				<p>nota:{" "}{clienteVer?.nota}</p>
			</div>
		</div>
	)
}
export default ClienteVer
