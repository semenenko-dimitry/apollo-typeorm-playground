import 'reflect-metadata'
import { config } from 'dotenv'
config()
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {UserResolver} from './Resolvers/Users'
import { buildSchema } from 'type-graphql'
import {SearchResolver} from "./Resolvers/Search";


async function main () {
	const app = express()
	const server = new ApolloServer({
		schema: await buildSchema({
			emitSchemaFile: true,
			resolvers: [
				UserResolver,
				SearchResolver
			],
		}),
		csrfPrevention: true,
		cache: 'bounded'
	});
	await server.start()
	server.applyMiddleware({ app })

	app.listen({ port: 3003 }, () => {
		console.log(` Server started on 3003`)
	})
}

main().catch(err => console.error(err))
