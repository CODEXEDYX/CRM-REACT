import {clienteAñadir} from "../data/clientes"
import Formulario from "../components/Formulario"
import ErrorFormulario from "../components/ErrorFormulario"
import {Form, useActionData, redirect, useNavigate} from "react-router-dom"
export async function action({request}) {
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
	await clienteAñadir(datos)
	return redirect("/clientes")
}
const ClienteNuevo = _ => {
	const navigate = useNavigate()
	const formualrio = useActionData()
	return (
		<div className="cont_cliente cont_cliente_formulario">
			<h2>
				nuevo <span>cliente</span>
			</h2>
			<p>llena los siguientes campos para registrar un cliente</p>

			<div className="caja_boton_cliente" role="button">
				<button
					title="salir a la pantalla de inicio"
					type="button"
					onClick={() => navigate("/")}
				>
					salir
				</button>
			</div>
			<div className="cont_formulario">
				{formualrio?.length &&
					formualrio.map((error, i) => (
						<ErrorFormulario key={i}>{error}</ErrorFormulario>
					))}
				<Form method="post">
					<Formulario />
					<div className="formulario_grupo boton">
						<input type="submit" value="Agregar Cliente" />
					</div>
				</Form>
			</div>
		</div>
	)
}
export default ClienteNuevo
