"use server";
import { API_URL} from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/constants";
export default async function updateLocation(store: string,formData: FormData) {
    let location: any = {};
    let locationLatLng = [0,0];
    for (const key of Array.from(formData.keys())) {
        const value = formData.get(key);
        if (value){
            if (key === "locationLat") {
                locationLatLng[0] = +value
            }else if (key === "locationLng") {
                locationLatLng[1] = +value
            }else {
                location[key] = formData.get(key);
            }
        }
    }
    location.locationLatLng = locationLatLng;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        method: 'PATCH',
        body: JSON.stringify(location),
        headers: {
            ...authHeaders(),
            'Content-Type': 'application/json',
        }
    })
    const {locationId}: Location = await response.json();
    if (response.status === 200){
        revalidateTag("dashboard:locations");
        revalidateTag(`dashboard:locations${store}`);
        redirect(`/dashboard?store=${locationId}`)
    }
}