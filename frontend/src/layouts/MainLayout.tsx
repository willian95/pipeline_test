import { ReactNode } from "react"
import Navbar from "../components/Navbar"

export const MainLayout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <Navbar/>
            {children}
        </>
    )

}