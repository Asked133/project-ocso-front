import { Input } from "@heroui/react";
import createLocation from "@/actions/locations/create";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/constants";
import { API_URL } from "@/constants";
import axios from "axios";
import SelectManager from "./SelectManager";

export default async function FormNewLocation({store}: {store: string | undefined | string[]}) {
    if (store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const responseLocation = await axios.get(`${API_URL}/locations`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tienda</h1>
            <Input label= "Nombre" placeholder="Ocso Jirikiya" name="locationName"/>
            <Input label= "Direccion" placeholder="Av De La Luz S/N" name="locationAddress"/>
            <Input label= "Latitud" placeholder="-120" name="locationLat"/>
            <Input label= "Longitud" placeholder="20" name="locationLng"/>
            <SelectManager managers={responseManagers.data} locations= {responseLocation.data}/>
                <Input label= "submit" color="primary" name="locationName"/>

            <button>Subir</button>
        </form>
    )
}