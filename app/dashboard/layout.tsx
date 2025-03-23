 import Header from "./_componentes/Header"
import Sidebar from "./_componentes/_sidebar/Sidebar"
 export default function LayoutDashbord({
    children,
    count
  }: Readonly<{
    children: React.ReactNode
    count: React.ReactNode
  }>){
    return(
        <div className="w-screen h-screen bg-orange-50">
            <Header></Header>
            <div className="flex flex-row items-center">  
              <Sidebar></Sidebar>
              {children}
              {count}
            </div>
        </div>
    )
 }