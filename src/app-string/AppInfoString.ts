import { NamedStrings, StringSheet } from "./@AppStringModel";

export const AppInfoString = StringSheet.create({
    NotLoggedInMessage: {
        en: "Login to follow profiles or groups, like and reply to posts. You can also view sports scores and news, post polls, post images, and post your sports bets."
    },
    APIInfoMessage: {
        en: "Sports data is provided by ESPN. To learn more about the api used, "
    },
    GithubRepoMessage: {
        en: "To see what technologies are used in Wagerly and how it was built, checkout our "
    }
} as NamedStrings<any>)