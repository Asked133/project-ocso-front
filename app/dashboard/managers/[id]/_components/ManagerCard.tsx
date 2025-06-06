import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Manager } from "@/entities";
import { Link } from "@heroui/react";
import { LuPlus } from "react-icons/lu";
import FormUpdateUser from "./FormUpdateUser";
import ModalGeneric from "@/app/dashboard/_components/ModalGeneric";
import FormCreateUserManager from "@/app/dashboard/managers/[id]/_components/FormCreateUser";

export default function ManagerCard({ manager }: { manager: Manager }) {
    return (
        <Card className="mx-20 py-2 text-center" >
            <CardHeader>
                <p className="w-full">
                    <b className="text-4x1">{manager.managerFullName}</b>
                </p>
                {
                    manager.user ? (
                        <ModalGeneric icon={<LuPlus size={20} />}>
                            <FormUpdateUser user={manager.user} />
                        </ModalGeneric>
                    ) : (
                        <ModalGeneric icon={<LuPlus size={20} />}>
                            <FormCreateUserManager manager={manager} />
                        </ModalGeneric>
                    )
                }
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
                <div className="flex flex-col text-lg">
                    <p className="w-full">
                        Email: <b>{manager.managerEmail}</b>
                    </p>
                    <p className="w-full">
                        Telefono: <b>{manager.managerPhoneNumber}</b>
                    </p>
                </div>
                {manager.location ? (
                    <>
                        <p className={manager.location ? "" : "hidden"}>
                            Tienda: {" "}
                            <Link
                                href={`/dashboard?store=${manager?.location?.locationId}`}
                            >
                                <b className="underline">{manager?.location?.locationName} </b>
                            </Link>
                        </p>
                    </>
                ) : (
                    <p> No tiene tienda asignada </p>
                )}

            </CardBody>
        </Card>
    )
  }