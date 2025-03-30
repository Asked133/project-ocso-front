import { Location } from "@/entities";
import axios from "axios";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
    headers: {
      ...authHeaders(),
    },
  });
  return (
    <Card>
      <CardHeader>
        <b className="w-full">{data.locationName}</b>
      </CardHeader>

      <Divider />

      <CardBody>
        <p className="w-full">
          Manager:
          <Link href={{ pathname: `/dashboard/managers` }}>
            <b>{data.manager?.managerFullName}</b>
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}
