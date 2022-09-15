import {Client} from "pg";
import {User} from '../Entities/User'
import {DataSource} from "typeorm";

export default async function getPgClient() {
	const AppDataSource = new DataSource({
		type: "postgres",
		host: "localhost",
		port: 5432,
		username: "postgres",
		password: "admin",
		database: "local_test",
		entities: [User],
		synchronize: true,
		logging: false,
	})

	await AppDataSource.initialize()
	return AppDataSource
}
