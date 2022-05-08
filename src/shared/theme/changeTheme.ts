import { Theme } from "./theme";

export const changeTheme = (theme: Theme) => {
    let themeLink = document.getElementById('app-theme') as HTMLAnchorElement;
    if (themeLink) {
        themeLink.href = `${theme}.css`;
    }
}