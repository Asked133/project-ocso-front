import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import { Select, SelectItem } from "@heroui/react";

const LocationsPage = async ({searchParams}: {searchParams: {[key: string]: string | string[]|undefined}}) => {
  const userCookies = cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  let { data } = await axios.get<Location[]>(
    "http://127.0.0.1:4000/locations",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  data = [
    {
      locationId: 0,
      locationName: "Ninguna",
      locationLatLng: [0,0],
      locationAddress: "No existe", 
    },
    ...data
  ]
  return (
    <div className="w-2/12">
      <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
        <div className="w-1/2 my-10">
        {searchParams.store ? (
          <SelectLocation locations={data} store={searchParams?.store}/>
        ): <p className="w-full text-2xl px-2 text-center mt-10">Selecciona una tienda para ver los empleados</p>}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
