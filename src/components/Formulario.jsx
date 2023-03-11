const Formulario = ({clientes}) => {
	return (
		<>
			<div className="formulario_grupo nombre">
				<label htmlFor="nombre">Nombre:</label>
				<input
					id="nombre"
					type="text"
					placeholder="Nombre del Cliente"
					name="nombre"
					defaultValue={clientes?.nombre}
				/>
			</div>
			<div className="formulario_grupo empresa ">
				<label htmlFor="empresa">Empresa:</label>
				<input
					id="empresa"
					type="text"
					placeholder="Empresa del Cliente"
					name="empresa"
					defaultValue={clientes?.empresa}
				/>
			</div>

			<div className="formulario_grupo ">
				<label htmlFor="email">E-mail:</label>
				<input
					id="email"
					type="email"
					placeholder="Email del Cliente"
					name="email"
					defaultValue={clientes?.email}
				/>
			</div>

			<div className="formulario_grupo ">
				<label htmlFor="telefono">Teléfono:</label>
				<input
					id="telefono"
					type="tel"
					placeholder="Teléfono del Cliente"
					name="telefono"
					defaultValue={clientes?.telefono}
				/>
			</div>

			<div className="formulario_grupo mensaje ">
				<label htmlFor="notas">Notas:</label>
				<textarea
					as="textarea"
					id="notas"
					type="text"
					placeholder="Notas del Cliente"
					name="notas"
					defaultValue={clientes?.notas}
				/>
			</div>
		</>
	)
}

export default Formulario
