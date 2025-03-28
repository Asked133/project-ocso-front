'use client';
import { API_URL } from "@/constants";
import { Input, Button} from "@heroui/react"
import Link from "next/link"
import axios from "axios";


export default function LoginPage(){
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData (e.target);
        let authData: any = {}
        authData.userEmail = formData.get("userEmail")
        authData.userPassword = formData.get("userPassword")
        const {data} = await axios.post(`${API_URL}/auth/login`, {
            ...authData
        });
        console.log(data)
    }
    return (
        <form className="bg-orange-700 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4">Iniciar sesion</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label= "Email" name="userEmail" type="email" isRequired={true} size= "sm"></Input>
                <Input label= "Contraseña" name="userPassword" type="password" isRequired={true} size="sm"></Input>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary" type="submit">Iniciar sesion</Button>
                <p className="text-white">
                     ¿Tienes cuenta? <Link href="/signup" className="text-orange-400 underline">Registrate</Link>
                </p>
            </div>
        </form>
    )
}