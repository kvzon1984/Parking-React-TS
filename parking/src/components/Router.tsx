import { Routes, Route  } from "react-router-dom";
import Menu from "./Menu";
import AgregarVehiculo from "./AgregarVehiculo";
import ListarVehiculos from "./ListarVehiculos";
import Error from "../helpers/Error404";
import BuscarVehiculo from "./BuscarVehiculo";
import Pago from "./Pago";

const ReactRouter = () => {
    return (
        <div>
            <Menu />
            <section className="container">
                <Routes>
                    <Route path="/agregar-vehiculo" element={<AgregarVehiculo />} />
                    <Route path="/listar-Vehiculos" element={<ListarVehiculos />} />
                    <Route path="/buscar-Vehiculos/" element={<BuscarVehiculo />} />
                    <Route path="/pago" element={<Pago/>} />
                    <Route path="*" element={< Error />} />
                </Routes>
            </section>
        </div>
    )
};

export default ReactRouter;