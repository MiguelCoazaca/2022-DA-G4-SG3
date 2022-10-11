import { NavLink } from "react-router-dom"

export default function Navbar() {
    return( 
    <div>
        <ul>
            <li>
                <NavLink to='/'>Pagina Principal</NavLink>
            </li>
            <li>
                <NavLink to='/contacto'>Contacto</NavLink>
            </li>
            <li>
                <NavLink to='/nosotros'>Nosotros</NavLink>
            </li>
        </ul> 


         </div>)
}