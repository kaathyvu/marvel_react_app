import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        superhero_name: 'Thor',
        name: 'Thor',
        description: 'God of Thunder, Son of Odin',
        num_of_comics: 111,
        superpower: 'Thunder'
    },
    reducers: {
        chooseSuperhero: (state, action) => {state.superhero_name = action.payload },
        chooseName: (state, action) => {state.name = action.payload },
        chooseDescription: (state, action) => {state.description = action.payload },
        chooseNumOfComics: (state, action) => {state.num_of_comics = action.payload },
        chooseSuperpower: (state, action) => {state.superpower = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const {chooseDescription, chooseName, chooseNumOfComics, chooseSuperhero, chooseSuperpower} = rootSlice.actions