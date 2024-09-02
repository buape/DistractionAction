import type { ExecutionContext } from "@cloudflare/workers-types/2023-07-01";
type Env = {
    CLIENT_ID: string;
    PUBLIC_KEY: string;
    DISCORD_TOKEN: string;
};
declare const _default: {
    fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<any>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map