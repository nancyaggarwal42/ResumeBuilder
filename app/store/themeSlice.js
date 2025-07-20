import { createSlice } from '@reduxjs/toolkit';
const storedTheme = localStorage.getItem('theme');
const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: storedTheme === 'dark',
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDarkMode;
        },
    },
});

export const {toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;