"user server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateManager(managerId: string,formData: FormData) {
  let manager: any = [];
  for (const key of Array.from(formData.keys())) {
    manager[key] = formData.get(key);
  }
  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "PATCH",
    headers: {
      ...authHeaders(),
    },
    body: JSON.stringify(manager),
  });
  if (response.status === 200) {
    revalidateTag("dashboard:managers");
    revalidateTag(`dashboard:managers:${managerId}`);
  }
}
