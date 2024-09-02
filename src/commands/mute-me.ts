import { type APIApplicationCommandBasicOption, ApplicationCommandOptionType, Command, type CommandInteraction } from "@buape/carbon";

export class MuteMe extends Command {
	name = "mute-me"
	description = "Mute yourself to focus!"
	defer = true

	options: APIApplicationCommandBasicOption[] = [{
		type: ApplicationCommandOptionType.Integer,
		name: "hours",
		description: "How long do you want to be muted in hours?",
		required: true,
		min_value: 1,
		max_value: 24
	}]

	async run(interaction: CommandInteraction) {
		const length = interaction.options?.getInteger("hours") as number
		if (!length) {
			return await interaction.reply({ content: "Bruh you gotta give me how many hours you wanna be muted..." })
		}
		const member = interaction.member
		if (!member) {
			return await interaction.reply({ content: "You need to be in a server to mute yourself" })
		}
		try {
			await member.timeoutMember(new Date(Date.now() + length * 60 * 60 * 1000).toISOString())
			await interaction.reply({ content: `Done! Go focus! Be gone! Work! Do good! <a:duckbop:1280305476894195722> \nYou will be unmuted <t:${Math.floor((Date.now() + length * 60 * 60 * 1000) / 1000)}:R>.` })
		} catch (_e) {
			if (_e instanceof Error) {
				if (_e.message === "Missing Permissions") {
					return await interaction.reply({ content: "I don't have enough permissions to mute you! <a:duckbop:1280305476894195722>" })
				}
			}
			console.error(_e)
			await interaction.reply({ content: "Oops, something went wrong" })
		}
	}
}