import {UserRepositoryInterface } from "../database.interface"

export class GetAllUsersService{

    constructor(private database: UserRepositoryInterface){}

    public async getUsers(){
        return this.database.getAllUsers()
    }

}