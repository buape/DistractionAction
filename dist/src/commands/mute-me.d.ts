import { type APIApplicationCommandBasicOption, Command, type CommandInteraction } from "@buape/carbon";
export declare class MuteMe extends Command {
    name: string;
    description: string;
    defer: boolean;
    options: APIApplicationCommandBasicOption[];
    run(interaction: CommandInteraction): Promise<void>;
}
//# sourceMappingURL=mute-me.d.ts.map