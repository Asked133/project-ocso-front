import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@heroui/react";
export default function FormUpdateManager({manager}: {manager: Manager}){
    const updateManagerWithId = updateManager.bind(null, manager.managerId);
    return (
        <form action={updateManagerWithId} className="bg-oranger-400 rounded-md">
            <h1>Actualizar Manager</h1>
            <Input defaultValue={manager.managerFullName}
            placeholder="Marco Aurelio"
            name="managerFullName"
            />
            <Input defaultValue={manager.managerEmail}
            placeholder="manager@ocso.com"
            name="managerEmail"
            />
            <Input defaultValue={String(manager.managerSalary)}
            placeholder="manager@ocso.com"
            name="12000"
            />
            <Input defaultValue={manager.managerPhoneNumber}
            placeholder="manager@ocso.com"
            name="4421333617"
            />
            <Button color="primary" type="submit">Actualizar</Button>
        </form>

    )

}
