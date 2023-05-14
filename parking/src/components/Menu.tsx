import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Menu() {
    return (
        <>
        <Navbar bg="dark" variant="dark" >
            <Container className='container'>
            <NavLink className="link" to="/">Navbar</NavLink>
            <Nav className="justify-content-end p-4">
                <NavLink className="link ps-5" to="/agregar-vehiculo" >Agregar Vehiculo</NavLink>
                <NavLink className="link ps-5" to="/listar-Vehiculos">Listar Vehiculos</NavLink>
                <NavLink className="link ps-5" to="/buscar-Vehiculos">Buscar Vehiculos</NavLink>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default Menu;