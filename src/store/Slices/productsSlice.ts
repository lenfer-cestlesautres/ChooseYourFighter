import {
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit';

export interface ProductsState {
	chosen_products: string[];
	chosen_objects: IProductsInfo[];
}

export interface IProductsInfo {
	name?: string;
	age?: number;
	phrase?: string;
	skills?: string;
};

const initialState: ProductsState = {
	chosen_products: [],
	chosen_objects: []
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProducts: (state, action: PayloadAction<string>) => {
			state.chosen_products = [...state.chosen_products, action.payload];
		},
		removeProduct: (state, action: PayloadAction<string | undefined>) => {
			state.chosen_products = state.chosen_products.filter(item => item !== action.payload);
		},
		addChosenObjects: (state, action: PayloadAction<IProductsInfo>) => {
			state.chosen_objects = [...state.chosen_objects, action.payload];
		}
	}
});

export const {addProducts, removeProduct, addChosenObjects} = productsSlice.actions;
export default productsSlice.reducer;