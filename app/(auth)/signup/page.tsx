import { Button, Input} from "@heroui/react";
import Link from "next/link";
export default function SignupPage(){
    return (
        <div className="bg-orange-700 px-10 py-2 rounded-md">
            <p className="text-2xl my-4">Registrarse</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label= "Email" type="email" isRequired={true} size= "sm"></Input>
                <Input label= "Contraseña" type="password" isRequired={true} size="sm"></Input>
                <Input label= "Repetir contraseña" type="password" isRequired={true} size="sm"></Input>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Registrarse</Button>
                <p className="text-white">
                    ¿Ya tienes una cuenta? <Link href="/login" className="text-orange-400 underline">Inicia sesión</Link>
                </p>
            </div>
        </div>
    )
}