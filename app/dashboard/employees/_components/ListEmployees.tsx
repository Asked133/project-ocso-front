"use client";
import { Employee, Location } from "@/entities";
import EmployeeCard from "./EmployeeCard";
import EmployeePhotoCard from "./EmployeePhotoCard";
import { useState } from "react";
import { Select, SelectItem } from "@heroui/react";

export default function ListEmployees({
    employees,
    locations,
}: {
    employees: Employee[];
    locations: Location[];
}) {
    const [filter, setFilter] = useState<string>("");

    return (
        <div className="flex flex-wrap gap-6 w-full">
            {locations && (
                <Select
                    label="Tiendas"
                    defaultSelectedKeys={[]}
                    className="w-60 pr-20 py-10"
                    onChange={(e) => setFilter(e.target.value)}
                >
                    {locations.map((location) => (
                        <SelectItem key={location.locationId}>
                            {location.locationName}
                        </SelectItem>
                    ))}
                </Select>
            )}
            <div className="flex flex-wrap">


            {employees
                .filter((employee: Employee) => {
                    if (filter === "") return true;
                    return String(employee.location?.locationId) === filter;
                })
                .map((employee: Employee) => {
                    if (employee.employeePhoto !== null) {
                        return (
                            <EmployeePhotoCard
                                key={employee.employeeId}
                                employee={employee}
                            />
                        );
                    } else {
                        return (
                            <EmployeeCard
                                key={employee.employeeId}
                                employee={employee}
                            />
                        );
                    }
                })}
                </div>
        </div>
    );
}