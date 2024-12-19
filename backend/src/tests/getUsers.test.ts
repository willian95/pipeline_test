import { describe, expect, test } from "@jest/globals";
import { DummyUserRepository } from "../repositories/DummyUser.repository";
import { GetAllUsersService } from "../services/getAllUsers.service";

describe('Get users', () => {

    test('get all users', async () => {

        const registerMysql = new DummyUserRepository()
        const getAllUsersService = new GetAllUsersService(registerMysql)
        const users = await getAllUsersService.getUsers()
        
        expect(users.length).toBe(5)

    })

})