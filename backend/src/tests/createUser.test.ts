import { describe, expect, test } from "@jest/globals";
import { DummyUserRepository } from "../repositories/DummyUser.repository";
import { GetAllUsersService } from "../services/getAllUsers.service";
import { CreateUserService } from "../services/createUser.service";
import { User } from "../user.interface";

describe('Create users', () => {

    test('create user', async () => {

        const user:User = {
            name: "John",
            lastname: "Doe",
            email: "willianrodriguez@gmail.com"
        }

        const dummyRepo = new DummyUserRepository()
        const createUserService = new CreateUserService(dummyRepo)
        const userResponse = await createUserService.createUser(user)

        const getAllUsersService = new GetAllUsersService(dummyRepo)
        const users = await getAllUsersService.getUsers()

        expect(users.findIndex((item) => item.email == userResponse.email)).toBeGreaterThan(-1)
        

    })

})