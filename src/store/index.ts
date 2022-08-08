import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/productListSlice'
import productsReducer from './Slices/productsSlice'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// actually most of these slices in the final version of the project
// are kinda useless but i needed some practice with store creation
// and now I just don't want to remove them because It would be a waste my of time
// sorry
// and I didn't name the main one properly
// sorry for that too


export const store = configureStore({
	reducer: {
		counter: counterReducer,		//* aka productListSlice 
	  	products: productsReducer,		//* we keep here an array of products aka names. why? bcs we can 
										//* (I should have implemented a much more difficult logic but changed my mind)
	},
});






