
// Unfortunately this pice of code is quite useless
// it stays here just to give the appearance of the different slice existence in store

import {
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit';

export interface SingleProductState {
	skills?: string;
}

const initialState: SingleProductState =
{
}

export const singleProductSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		editSkills: (state, action: PayloadAction<string>) => {
			state.skills = action.payload;
		}
	}
});

export const {editSkills} = singleProductSlice.actions;

export default singleProductSlice.reducer;
