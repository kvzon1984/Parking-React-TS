
export interface Vehiculo {
    patente: string,
    horaEntrada: string,
    horaSalida: string,
    pagado: boolean,
    monto: number
}

export interface VehiculoState {
    vehiculos: Vehiculo[]
}

export interface VehiculoProviderProps {
    children: JSX.Element | JSX.Element[]
}