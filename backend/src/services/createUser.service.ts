import {UserRepositoryInterface } from "../database.interface"
import { User } from "../user.interface"

export class CreateUserService{

    constructor(private database: UserRepositoryInterface){}

    public async createUser(user: User){
        return this.database.storeUser(user)
    }

}