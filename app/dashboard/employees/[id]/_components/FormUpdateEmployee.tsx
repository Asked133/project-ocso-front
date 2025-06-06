import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button } from "@heroui/react";
import { Input } from "@heroui/react";
import SelectLocations from "../../_components/SelectLocation";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";

export default async function FormUpdateEmployee({employee}: {employee: Employee}) {
    const {employeeId} = employee;
    const updateEmployeeById = updateEmployee.bind(null, employeeId);
    const responseLocations = await fetch(`${API_URL}/locations`, {
            headers: {
                ...await authHeaders(),
            }
        })
        const locations = await responseLocations.json();
    return (
        <form action={updateEmployeeById} className="flex flex-col gap-4 w-full h-full p-10 overflow-y-auto bg-white"> 
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName} />
            <Input label="Apellido" name="employeeLastName" defaultValue={employee.employeeLastName} />
            <Input label="Correo Electrónico" name="employeeEmail" defaultValue={employee.employeeEmail} />
            <Input label="Número Telefónico" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber} />
            <Input type="file" name="employeePhoto" defaultValue={employee.employeePhoto} />
            <SelectLocations stores={locations} defaultStore={employee.location?.locationId} />
            <Button type="submit" >
                Actualizar Datos
            </Button>
        </form>
    )
}