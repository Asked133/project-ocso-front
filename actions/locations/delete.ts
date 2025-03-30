import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

export default async function deleteLocation(FormData: FormData){
const locationId = FormData.get("deleteValue");
if (!locationId){
    return;
}
const token = cookies().get(TOKEN_NAME)?.value
axios.delete(`${API_URL}/locations/${locationId}`,{
    headers:
    {
        "Authorization": `Bearer ${token}`
    }
})
}