export async function clienteApi() {
	const clientes = await fetch(import.meta.env.VITE_URL)
	const clientesValor = await clientes.json()
	return clientesValor
}

export async function clientesId(id) {
	const clientes = await fetch(`${import.meta.env.VITE_URL}/${id}`)
	const clientesValor = await clientes.json()
	return clientesValor
}

export async function clienteAñadir(datos) {
	const clienteAñadir = await fetch(import.meta.env.VITE_URL, {
		method: "post",
		body: JSON.stringify(datos),
		headers: {
			"Content-Type": "application/json",
		},
	})
	await clienteAñadir.json()
	return clienteAñadir
}

export async function clienteEditarFormulario(id, datos) {
	const clienteAñadir = await fetch(`${import.meta.env.VITE_URL}/${id}`, {
		method: "put",
		body: JSON.stringify(datos),
		headers: {
			"Content-Type": "application/json",
		},
	})
	await clienteAñadir.json()
	return clienteAñadir
}

export async function clienteEliminar(id) {
	const clienteAñadir = await fetch(`${import.meta.env.VITE_URL}/${id}`, {
		method: "DELETE",
	})
	await clienteAñadir.json()
	return clienteAñadir
}

export async function clientesVer(id) {
	const clientes = await fetch(`${import.meta.env.VITE_URL}/${id}`)
	const clientesValor = await clientes.json()
	return clientesValor
}
