import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ManagerCard from "./_components/ManagerCard";


export default async function ManagerPage({params,}:{
    params: {
        id: string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        method: 'GET',
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ['dashboard:managers', `dashboard:managers:${params.id}`],
        },
    });
    const data: Manager = await response.json();
    return (
        <div >
            <ManagerCard manager={data}/>
        </div>
    )
}