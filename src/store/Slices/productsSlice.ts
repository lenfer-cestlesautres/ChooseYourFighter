import {
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit';

export interface ProductsState {
	chosen_products: string[];
	// indexes: number[];
}

const initialState: ProductsState = {
	chosen_products: [],
	// indexes: []
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProducts: (state, action: PayloadAction<string>) => {
			state.chosen_products = [...state.chosen_products, action.payload];
		}
	}
});

export const {addProducts} = productsSlice.actions;

export default productsSlice.reducer;



// export {}