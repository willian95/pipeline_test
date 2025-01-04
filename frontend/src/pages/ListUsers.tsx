import { useEffect, useState } from "react";
import { Table } from "../components/Table"
import { UserList } from "../interfaces/UserList.interface";
import { MainLayout } from "../layouts/MainLayout"
import { HttpClient } from "../repositories/HttpClient";
import { Loading } from "../components/Loading";


const headers: string[] = ['id', 'Nombre', 'Apellido', 'Email'];

export const ListUsers = () => {

    const [users, setUsers] = useState<UserList[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUsers = async () => {
        setLoading(true);
        const data = await HttpClient('GET', '', {});
        const usersData = data.map((user: UserList) => {
            return {
                id: user.id,
                name: user.name,
                lastname: user.lastname,
                email: user.email
            }
        })

        setUsers(usersData);
        setLoading(false);

    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <MainLayout>
            <h1 className="text-center text-2xl font-bold mt-4">
                Listado de usuarios
            </h1>
     
            {
                loading ? <Loading /> : <Table headers={headers} items={users} />
            }

        </MainLayout>
    )
}