import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu"
import NavItem from "./NavItem"

export default function Sidebar(){
    return(
        <nav className="w-[10vw] h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify-center gap-10">
            <NavItem path = "/dashboard" icon={<LuStore className="text-4xl"></LuStore>}></NavItem>
            <NavItem path = "/dashboard/providers" icon={<LuTruck className="text-4xl"></LuTruck>}></NavItem>
            <NavItem path = "/dashboard/products" icon={<LuWheat className="text-4xl"></LuWheat>}></NavItem>
            <NavItem path = "/dashboard/managers" icon={<LuUser className="text-4xl"></LuUser>}></NavItem>
            <NavItem path = "/dashboard/employees" icon={<LuUsers className="text-4xl"></LuUsers>}></NavItem>
        </nav>
    )
}