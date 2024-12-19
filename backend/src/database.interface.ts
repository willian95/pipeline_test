import { ObjectLiteral } from "typeorm";
import { User } from "./user.interface";

export interface UserRepositoryInterface {
    getAllUsers(): Promise<ObjectLiteral[]>   
    storeUser(user: User): Promise<User>
}