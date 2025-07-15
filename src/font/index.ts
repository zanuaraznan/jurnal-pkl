import localFont from 'next/font/local';
import { Bagel_Fat_One, Host_Grotesk } from 'next/font/google';

const googleSans = localFont({
    src: '../font/googleSans.woff2',
});

const TTBlueScreens = localFont({
    src: '../font/TTBlueScreens.ttf',
    variable: '--tt-bluescreens',
});

const grotesk = Host_Grotesk({
    subsets: ['latin'],
    variable: '--grotesk',
});

const bagelFatOne = Bagel_Fat_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--bagel',
});

export { googleSans, TTBlueScreens, grotesk, bagelFatOne };
