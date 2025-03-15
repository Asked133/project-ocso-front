import { Input, Button} from "@heroui/react"
import Link from "next/link"


export default function LoginPage(){
    return (
        <div className="bg-orange-700 px-10 py-2 rounded-md">
            <p className="text-2xl my-4">Iniciar sesion</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label= "Email" type="email" isRequired={true} size= "sm"></Input>
                <Input label= "Contraseña" type="password" isRequired={true} size="sm"></Input>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Registrarse</Button>
                <p className="text-white">
                     tienes cuenta? <Link href="/signup" className="text-orange-400 underline">Registrate</Link>
                </p>
            </div>
        </div>
    )
}