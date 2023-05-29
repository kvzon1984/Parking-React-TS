import { ChangeEventHandler, MouseEventHandler, useState , useContext} from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { VehiculoContext } from '../context/VehiculoContext';



const date = new Date();
const dateStr =
    ("00" + date.getDate()).slice(-2) + "/" +
    ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
    date.getFullYear() + " " +
    ("00" + date.getHours()).slice(-2) + ":" +
    ("00" + date.getMinutes()).slice(-2) + ":" +
    ("00" + date.getSeconds()).slice(-2);

type VehiculoForm = {
    patente: string,
    horaEntrada: string,
    horaSalida: string
}

const initialValue: VehiculoForm = {
    patente: '',
    horaEntrada: dateStr,
    horaSalida: ''
}
export default function AgregarVehiculoForm() {
    const [form, setForm] = useState(initialValue)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const patente = e.target.name as keyof VehiculoForm
        setForm({ ...form, [patente]: e.target.value })
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log(form);
    }

    return (
        <>
            <Input name='patente' placeholder='Patente' handleChange={handleChange} />
            <Button handleClick={handleClick}>Iniciar</Button>
        </>
    )
}