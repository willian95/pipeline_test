import { ObjectLiteral } from "typeorm";
import { UserRepositoryInterface } from "../database.interface";
import { User } from "../user.interface";

const users = [
    { name: "John", lastname: "Doe", email: "john.doe@example.com" },
    { name: "Jane", lastname: "Smith", email: "jane.smith@example.com" },
    { name: "Alice", lastname: "Johnson", email: "alice.johnson@example.com" },
    { name: "Bob", lastname: "Brown", email: "bob.brown@example.com" },
    { name: "Charlie", lastname: "Davis", email: "charlie.davis@example.com" }
];

export class DummyUserRepository implements UserRepositoryInterface {
    
    async storeUser(user: User): Promise<User> {
        users.push(user)
        return user
    }

    async getAllUsers(): Promise<ObjectLiteral[]> {
        return users
    }

}
