"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
// import { NextAppDirEmotionCacheProvider } from "./EmotionCache"
const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

const themeOptions = {
    typography: {
        fontSize: 12,
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        background: {
            // pink
            default: "#FFFFFF",
        },
        primary: {
            main: "#1976d2",
        },
        text: {
            primary: "#300000",
        },
    },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({children}) {
    return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
    );
}