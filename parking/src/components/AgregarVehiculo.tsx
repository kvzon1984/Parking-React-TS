import { useState } from "react"

const AgregarVehiculo = () => {
    const [patente, setPantete] = useState('')

    return (
        <div className="container p-5">
            <h1>Agregar Vehiculo</h1>
            <input
                type="text"
                name="patente"
                value={patente}
            />
        </div>
    )
}

export default AgregarVehiculo