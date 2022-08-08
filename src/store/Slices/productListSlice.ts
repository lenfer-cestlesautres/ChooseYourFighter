import {
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit';

export interface CounterState {
	value: number;
	productsList: string[];
	productsIndex: number[];
}

const initialState: CounterState = {
	value: 0,
	productsList: [],
	productsIndex: []
}




export const counterSlice = createSlice({
	name: 'counter', //name of the slice
    initialState, // passing the initial state
	reducers: { // writing what each reducer does itself
		addProductsList: (state, action: PayloadAction<string[]>) => {
			state.productsList = action.payload;
		},
		addProductIndex: (state, action: PayloadAction<number>) => {
			state.productsIndex = [...state.productsIndex, action.payload];
		}
	}
});

export const { addProductIndex, addProductsList } = counterSlice.actions
export default counterSlice.reducer;