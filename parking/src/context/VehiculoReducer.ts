import { Vehiculo, VehiculoState } from "../interfaces/interfaces";

type ActionVehiculo =
    | { type: 'addVehiculo', payload: Vehiculo }
    | { type: 'deleteVehiculo', payload: { patente: string} }


export const vehiculoReducer = (state: VehiculoState, action: ActionVehiculo): VehiculoState => {
    switch ( action.type ) {
        case 'addVehiculo':
            return {
                ...state,
                vehiculos: [ ...state.vehiculos, action.payload ]
            }

        default:
            return state;
    }
}
