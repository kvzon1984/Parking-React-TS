import { Routes, Route, useParams, Outlet, Link, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { NavLink } from '../helpers/Navbar'

export default function Navbar() {
    return (
        <div className="container">
            <div className="notification is-dark">
                <nav className="navbar is-dark"  role="navigation" aria-label="main navigation">
                    <div className='navbar-menu'>
                        <div className="navbar-start">
                            <div className='navbar-item'>
                                <NavLink to="/agregar-vehiculos"> Agregar Vehiculo </NavLink>
                            </div>
                            <div className='navbar-item'>
                                <NavLink to="/Listar-vehiculos"> Listar Vehiculos </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}