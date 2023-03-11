import {useNavigate, Form, redirect} from "react-router-dom"
import {clienteEliminar} from "../data/clientes"
export async function action({params}) {
	await clienteEliminar(params.eliminar)

	return redirect("/clientes")
}
const ClientesMap = ({clientesTabla}) => {
	const navigate = useNavigate()
	const {nombre, email, telefono, empresa, id} = clientesTabla
	return (
		<tr>
			<td>
				<p>{nombre}</p>
			</td>
			<td>
				<p>EMAIL:{email}</p>
				<p>TEL:{telefono}</p>
			</td>

			<td>
				<p>{empresa}</p>
			</td>

			<td role="button">
				<Form method="post" action={`/clientes/${id}/eliminar`}>
					<button type="submit">eliminr</button>
				</Form>
				<button type="button" onClick={() => navigate(`/clientes/${id}/editar`)}>
					editar
				</button>
				<button type="button" onClick={() => navigate(`/clientes/${id}/cliente`)}>
					ver
				</button>
			</td>
		</tr>
	)
}
export default ClientesMap
