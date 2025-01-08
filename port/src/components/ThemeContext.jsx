import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [dm, setDm] = useState(false);

    const toggleMode = () => setDm(!dm);

    return (
        <ThemeContext.Provider value={{ dm, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
