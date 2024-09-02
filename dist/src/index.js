import { Client, ClientMode } from "@buape/carbon";
import { MuteMe } from "./commands/mute-me.js";
export default {
    async fetch(request, env, ctx) {
        const client = new Client({
            clientId: env.CLIENT_ID,
            publicKey: env.PUBLIC_KEY,
            token: env.DISCORD_TOKEN,
            mode: ClientMode.CloudflareWorkers
        }, [
            new MuteMe()
        ]);
        if (request.url.endsWith("/deploy")) {
            await client.deployCommands();
            return new Response("Deployed commands");
        }
        const response = await client.router.fetch(request, ctx);
        return response;
    }
};
//# sourceMappingURL=index.js.map