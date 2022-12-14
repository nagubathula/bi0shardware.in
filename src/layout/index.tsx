import Head from "next/head";
import React, {useEffect, useLayoutEffect, useState} from "react";

import Header from "./header";
import Footer from "./footer";
import {Global, ThemeContext} from "@emotion/react";

const DARK_THEME = {
    isDarkTheme: true,
    text: '#fff',
    background: '#111927'
};

const LIGHT_THEME = {
    isDarkTheme: false,
    text: '#000',
    background: '#fff'
}

const useThemeDetector = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });

    useLayoutEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        if (darkThemeMq.matches) {
            setIsDarkTheme(true);
        }
        return () => darkThemeMq.removeListener(mqListener);
    }, []);

    return isDarkTheme;
}

const Layout = ({ children, title }) => {

    const isDark = useThemeDetector();
    const [isDarkTheme, setDarkTheme] = useState(isDark);

    useEffect(() => { setDarkTheme(isDark) }, [isDark]);

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <ThemeContext.Provider value={isDarkTheme ? DARK_THEME : LIGHT_THEME}>
                <Global
                    styles={{
                        img: {
                            // filter: isDarkTheme ? 'invert(50%)' : 'invert(0%)'
                        },
                        body: {
                            color: isDarkTheme ? DARK_THEME.text : LIGHT_THEME.text,
                            background: isDarkTheme ? DARK_THEME.background : LIGHT_THEME.background,
                            backgroundSize: `155px 60px`,
                            backgroundImage: isDarkTheme ?
                                `linear-gradient(90deg,hsla(0,0%,100%,.03) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,100%,.03) 1px,transparent 0)` :
                                `linear-gradient(90deg,hsl(0deg 0% 0% / 5%) 1px,transparent 0),linear-gradient(180deg,hsl(0deg 0% 0% / 5%) 1px,transparent 0)`
                        },
                        ".icons": {
                            filter: isDarkTheme ? 'invert(100%)' : 'invert(0%)'
                        }
                    }}
                />
                <Header isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme} />
                <div className="flex justify-center">
                    <div style={{width: '1100px', maxWidth: '100%'}}>
                        <div style={{height: '7vh'}}/>
                        <main className="p-2">
                            {children}
                        </main>
                        <Footer/>
                    </div>
                </div>
            </ThemeContext.Provider>
        </React.Fragment>
    );
};

export default Layout;