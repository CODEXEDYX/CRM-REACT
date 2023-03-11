import {useRouteError} from "react-router-dom"
const ErrorPages = _ => {
	const routerError = useRouteError()
	return (
		<div className="caja_error_page">
			<h2>
				<span>crm</span>-react
			</h2>
			<h3>uy se produjo un error en el servidor 404, reinicié la aplicación 😥</h3>
			<p>{routerError.message}</p>
		</div>
	)
}
export default ErrorPages
