import { ApplicationCommandOptionType, Command } from "@buape/carbon";
export class MuteMe extends Command {
    name = "mute-me";
    description = "Mute yourself to focus!";
    defer = true;
    options = [{
            type: ApplicationCommandOptionType.Integer,
            name: "length",
            description: "How long do you want to be muted in hours?",
            required: true,
            min_value: 1,
            max_value: 24
        }];
    async run(interaction) {
        const length = interaction.options?.getInteger("length");
        if (!length) {
            await interaction.reply({ content: "You need to provide a length" });
        }
        const member = interaction.member;
        if (!member) {
            await interaction.reply({ content: "You need to be in a server to mute yourself" });
            return;
        }
        await member.timeoutMember(new Date(Date.now() + length * 60 * 60 * 1000).toISOString());
        await interaction.reply({ content: `You will be muted for ${length} hours` });
    }
}
//# sourceMappingURL=mute-me.js.map