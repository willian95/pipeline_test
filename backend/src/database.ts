import { DataSource, ObjectLiteral } from "typeorm"
import { User } from "./models/user.model"

export class Database {

    private AppDataSource!: DataSource
    private static instance: Database

    private constructor(){

        this.AppDataSource = new DataSource({
            type: "mysql",
            host: "db",
            port: 3306,
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            synchronize: true,
            
            entities: [User],
            subscribers: [],
            migrations: [],
        })
        
    }

    public static getInstance(): Database{
   
        if(!Database.instance){
            Database.instance = new Database();
        }

        return Database.instance
    }

    public getDataSource(): DataSource{
        return this.AppDataSource
    }

    public async initConnection(isTest = false): Promise<boolean>{
        return await new Promise((resolve, reject) => {
            this.AppDataSource.initialize()
            .then(() => {
                console.log('Database connected')
                resolve(true)
            })
            .catch((error) => {
                console.log(error)
                reject(false)
            })
        })
    }

}