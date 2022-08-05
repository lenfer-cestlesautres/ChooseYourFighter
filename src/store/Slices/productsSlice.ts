import {
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit';
import { InProgress } from 'grommet-icons';

export interface ProductsState {
	chosen_products: string[];
	productsObjectArray: IProductsInfo[]
}

export interface IProductsInfo {
	name?: string;
	age?: number;
	phrase?: string;
	skills?: string;
};

const initialState: ProductsState = {
	chosen_products: [],
	productsObjectArray: []
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProducts: (state, action: PayloadAction<string>) => {
			state.chosen_products = [...state.chosen_products, action.payload];
		},
		removeProduct: (state, action: PayloadAction<string>) => {
			state.chosen_products = state.chosen_products.filter(item => item !== action.payload);
		},
		addProductsObjectArray: (state, action: PayloadAction<IProductsInfo>) => {
			state.productsObjectArray = [...state.productsObjectArray, action.payload];
		}
	}
});

export const {addProducts, removeProduct, addProductsObjectArray} = productsSlice.actions;
export default productsSlice.reducer;