import {clientesId} from "../data/clientes"
import Formulario from "../components/Formulario"
import {clienteEditarFormulario} from "../data/clientes"
import {
	Form,
	useNavigate,
	useLoaderData,
	redirect,
	useActionData,
} from "react-router-dom"
import ErrorFormulario from "../components/ErrorFormulario"

export async function loader({params}) {
	const clienteId = await clientesId(params.cliente)
	return clienteId
}

export async function action({request, params}) {
	const formData = await request.formData()
	const datos = Object.fromEntries(formData)
	const email = formData.get("email")

	const validacion = []
	if (Object.values(datos).includes("")) {
		validacion.push("todos los campo son obligatorion")
	}

	let regex = new RegExp(
		"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
	)

	if (!regex.test(email)) {
		validacion.push("el email no es valido")
	}

	if (Object.keys(validacion).length) {
		return validacion
	}
	await clienteEditarFormulario(params.cliente, datos)
	return redirect("/clientes")
}

const ClienteEditar = _ => {
	const navigate = useNavigate()
	const clientes = useLoaderData()
	const errores = useActionData()
	return (
		<div className="cont_cliente cont_cliente_formulario">
			<h2>
				editar <span>cliente</span>
			</h2>
			<p>a continuacion podras mostrar los datos de un cliente</p>

			<div className="caja_boton_cliente" role="button">
				<button
					title="salir a la pantalla de clientes"
					type="button"
					onClick={() => navigate(-1)}
				>
					volver
				</button>
			</div>

			<div className="cont_formulario">
				{errores?.length &&
					errores.map((error, i) => <ErrorFormulario key={i}>{error}</ErrorFormulario>)}
				<Form noValidate method="post">
					<Formulario clientes={clientes} />
					<div className="formulario_grupo boton">
						<input type="submit" value="Agregar Cliente" />
					</div>
				</Form>
			</div>
		</div>
	)
}
export default ClienteEditar
