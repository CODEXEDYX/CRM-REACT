import {Outlet, Link} from "react-router-dom"
import useLink from "../hooks/useLink"
const Header = _ => {
	const [LinkInico] = useLink("/", "inicio")
	const [LinkClientes] = useLink("/clientes", "clientes")
	const [LinkNuvoCliente] = useLink("/formulario", "nuevo cliente")
	return (
		<>
			<header role="banner">
				<div className="cont_header">
					<Link to="/">
						<h2>
							<strong>
								crm-<span>react</span>
							</strong>
						</h2>
					</Link>
					<nav>
						<ul>
							<LinkInico />
							<LinkClientes />
							<LinkNuvoCliente />
						</ul>
					</nav>
				</div>
			</header>
			<main role="main">
				<Outlet />
			</main>
		</>
	)
}
export default Header
