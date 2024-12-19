import { ObjectLiteral } from "typeorm";
import { UserRepositoryInterface } from "../database.interface";
import { Database } from "../database";
import { User } from "../models/user.model";
import { User as UserInterface } from "../user.interface";

export class MysqlUserRepository implements UserRepositoryInterface {
    
    async storeUser(user: UserInterface): Promise<UserInterface> {
        const userRepository = this.DatabaseInstance.getDataSource().getRepository(User)
        const newUser = new User()
        newUser.name = user.name
        newUser.email = user.email
        newUser.lastname = user.lastname

        await userRepository.save(newUser)
        return newUser
    }

    private DatabaseInstance: Database = Database.getInstance()

    async getAllUsers(): Promise<ObjectLiteral[]> {
        const userRepository = this.DatabaseInstance.getDataSource().getRepository(User)
        return await userRepository.find()
    }

}