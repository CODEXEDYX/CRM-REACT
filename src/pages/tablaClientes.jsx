import {useLoaderData} from "react-router-dom"
import ClientesMap from "../components/ClientesMap"
import {clienteApi} from "../data/clientes"

export async function loader() {
	const clientes = clienteApi()
	return clientes
}

const TablaClientes = _ => {
	const clientes = useLoaderData()
	const nombreClientes = ["nombre", "contacto", "empresa", "acion"]
	return (
		<div className="cont_cliente">
			<h2>
				<strong>
					administra tus <span>clientes</span>
				</strong>
			</h2>
			<p>comienza administrar tus clientes</p>

			{clientes.length ? (
				<table>
					<thead>
						<tr>
							{nombreClientes.map(clientesNombre => (
								<th>{clientesNombre}</th>
							))}
						</tr>
					</thead>

					<tbody>
						{clientes.map(clientesTabla => (
							<ClientesMap clientesTabla={clientesTabla} />
						))}
					</tbody>
				</table>
			) : (
				<div className="caja_texto_cliente">
					<p>no tienes ningún cliente aún agrega un cliente</p>
				</div>
			)}
		</div>
	)
}
export default TablaClientes
