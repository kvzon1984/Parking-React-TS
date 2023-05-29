import 'bulma/css/bulma.css'
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AgregarVehiculo from './components/AgregarVehiculo';
import ListarVehiculos from './components/ListarVehiculo';
import Error from './components/Error';
import { VehiculoProvider } from './context/VehiculoProvider';




function App() {

  return (
    <VehiculoProvider>
      <div className="App">
        <Navbar/>
        <section>
          <Routes>
              <Route path="/agregar-vehiculos" element={<AgregarVehiculo />} />
              <Route path="/listar-vehiculos" element={<ListarVehiculos />} />
              {/* <Route path="/sucursales" element={<ProtectedRoute><SearchSucursal /></ProtectedRoute>} />
              <Route path="/sucursales/:sucursal" element={<ProtectedRoute><Sucursal /></ProtectedRoute>}>
                  <Route index element={<SucursalIndex />} />
                  <Route path="detalle-sucursal" element={<DetalleSucursal />}/>
              </Route> */}
              <Route path="*" element={< Error />} />
          </Routes>
        </section>
      </div>
    </VehiculoProvider>
  );
}

export default App;
