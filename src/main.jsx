import "./index.css"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from "./components/Header"
import Inicio from "./pages/inicio"
import TablaClientes, {loader as clientesLoader} from "./pages/tablaClientes"
import ClienteNuevo, {action as formularioAction} from "./pages/clienteNuevo"
import ClienteEditar, {
	loader as editarCliente,
	action as editarFormulario,
} from "./pages/clienteEditar"
import ErrorPages from "./components/ErrorPages"
import {action as clienteEliminar} from "./components/ClientesMap"
import ClienteVer, {loader as clientesVer} from "./components/ClienteVer"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		errorElement: <ErrorPages />,
		children: [
			{
				index: true,
				element: <Inicio />,
				errorElement: <ErrorPages />,
			},
			{
				path: "/clientes",
				element: <TablaClientes />,
				loader: clientesLoader,
				errorElement: <ErrorPages />,
			},
			{
				path: "/formulario",
				element: <ClienteNuevo />,
				action: formularioAction,
				errorElement: <ErrorPages />,
			},
			{
				path: "/clientes/:cliente/editar",
				element: <ClienteEditar />,
				loader: editarCliente,
				action: editarFormulario,
				errorElement: <ErrorPages />,
			},
			{
				path: "/clientes/:eliminar/eliminar",
				action: clienteEliminar,
				errorElement: <ErrorPages />,
			},
			{
				path: "/clientes/:ver/cliente",
				element: <ClienteVer />,
				errorElement: <ErrorPages />,
				loader: clientesVer,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />,
)
