import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        listItems : localStorage.getItem('listItems')
        ? JSON.parse(localStorage.getItem('listItems')) 
        : [],
    },
    reducers : {
        addToList : (state , action) => {
            state.listItems = [action.payload , ...state.listItems]
            localStorage.setItem('listItems' , JSON.stringify(state.listItems))
        },
        removeFromList : (state , action) => {
            state.listItems = state.listItems.filter(list => list?.id !== action.payload.id)
            localStorage.setItem('listItems' , JSON.stringify(state.listItems))
        },
        clearList : (state) => {
            state.listItems = []
            localStorage.setItem('listItems' , JSON.stringify(state.listItems))
        }
    }
})


export const { addToList , removeFromList , clearList } = movieSlice.actions

export default movieSlice.reducer