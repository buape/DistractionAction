import { Client, ClientMode } from "@buape/carbon"
import type { ExecutionContext } from "@cloudflare/workers-types/2023-07-01"

import { MuteMe } from "./commands/mute-me.js"

type Env = {
	CLIENT_ID: string
	PUBLIC_KEY: string
	DISCORD_TOKEN: string
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const client = new Client(
			{
				clientId: env.CLIENT_ID,
				publicKey: env.PUBLIC_KEY,
				token: env.DISCORD_TOKEN,
				mode: ClientMode.CloudflareWorkers
			},
			[
				new MuteMe()
			]
		)
		if (request.url.endsWith("/deploy")) {
			await client.deployCommands()
			return new Response("Deployed commands")
		}
		const response = await client.router.fetch(request, ctx)
		return response
	}
}