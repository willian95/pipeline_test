import express, { Request, Response } from 'express';
import { GetAllUsersService } from './services/getAllUsers.service';
import { Database } from './database';
import { MysqlUserRepository } from './repositories/MysqlUser.repository';
import { CreateUserService } from './services/createUser.service';
import { User } from './user.interface';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

Database.getInstance().initConnection()

app.get('/', async (req: Request, res: Response) => {

  const mysqlSqlRepository = new MysqlUserRepository()
  const getAllUsersService = new GetAllUsersService(mysqlSqlRepository)
  const users = await getAllUsersService.getUsers()

  res.json(users);
});

app.post('/', async (req: Request, res: Response) => {
  
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  
  const user: User = {
    name,
    lastname,
    email
  }

  const mysqlSqlRepository = new MysqlUserRepository()
  const createUserService = new CreateUserService(mysqlSqlRepository)
  const userResponse = await createUserService.createUser(user)

  res.json(userResponse);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
