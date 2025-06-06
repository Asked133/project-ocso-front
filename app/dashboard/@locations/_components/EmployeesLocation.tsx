import { Employee} from "@/entities";
import { API_URL} from "@/constants";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { authHeaders } from "@/helpers/authHeaders";

export default async function  EmployeesLocation({store}: {store: string| string[]|undefined}) {    
    const response = await fetch(`${API_URL}/employees/location/${store}`,{
        method: 'GET',
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ['dashboard:locations:employees'],
        },
    });
    const data: Employee[] = await response.json();
    return data.map((employee: Employee) => {
        const fullname = employee.employeeName + " " + employee.employeeLastName;
        return <Card className="mx-10 my-10">
            <CardHeader>
                <p className="w-full">Nombre: <b>{fullname}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
            <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
            <p className="w-full">Telefono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
            </Card>
    })
}