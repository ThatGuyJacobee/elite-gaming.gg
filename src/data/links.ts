export type LinkItem = {
    href: string;
    icon: string;
    title: string;
    description: string;
};

export const featuredLinks = [
    {
        href: "https://discord.elite-gaming.gg",
        icon: "simple-icons:discord",
        title: "Discord Server",
        description: "Join our community and stay updated with the latest news, projects and more!",
    },
    {
        href: "https://fivem.elite-gaming.gg",
        icon: "simple-icons:fivem",
        title: "Elite Gaming FiveM",
        description: "Experience full law enforcement gameplay with NPCs & live with other players.",
    },
] satisfies LinkItem[];

export const projectLinks = [
    {
        href: "https://elite-bot.com",
        icon: "mdi:robot",
        title: "Elite Bot",
        description: "Elite Bot is a highly customisable and feature-packed multipurpose verified Discord bot! 👋",
    },
    {
        href: "https://github.com/ThatGuyJacobee/Elite-Music",
        icon: "mdi:music-note",
        title: "Elite Music Discord Bot",
        description:
            "An open-source & feature-packed bot, complete with Plex & Subsonic API support, Docker images, localisation and much more! 🚀💪",
    },
] satisfies LinkItem[];

export const utilityLinks = [
    {
        href: "https://status.elite-gaming.gg",
        icon: "simple-icons:uptimekuma",
        title: "Infrastructure Status",
        description: "Check the live status of our infrastructure and projects right here.",
    },
] satisfies LinkItem[];
