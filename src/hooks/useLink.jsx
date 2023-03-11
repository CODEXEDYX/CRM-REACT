import {NavLink} from "react-router-dom"
const useLink = (linkUrl, nobmreLink) => {
	const Link = _ => (
		<li>
			<NavLink className={({isActive}) => (isActive ? "azul" : "")} to={linkUrl}>
				{nobmreLink}
			</NavLink>
		</li>
	)
	return [Link]
}
export default useLink
