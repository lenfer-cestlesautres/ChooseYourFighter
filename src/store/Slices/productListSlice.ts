import { createSlice,/*, nanoid, createAsyncThunk */
PayloadAction} from '@reduxjs/toolkit';
// import { Action, Actions } from 'grommet-icons';
// import axios from 'axios';

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
	name: 'counter', //имя нашего слайса
    initialState, // задаёшь
	reducers: { //пишешь какие редьюсеры что делают
        increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
			},
		addProductsList: (state, action: PayloadAction<string[]>) => {
			state.productsList = action.payload;
		},
		addProductIndex: (state, action: PayloadAction<number>) => {
			state.productsIndex = [...state.productsIndex, action.payload];
		}
	}
});


export const { increment, decrement, addProductIndex, addProductsList } = counterSlice.actions

export default counterSlice.reducer;
















// const init: string[] = [];
// export const [state, setState] = useState(init);
// const URL: string = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true'

// export const fetchData = createAsyncThunk('fetchData', async () => {
// 	const response = await axios.get(
// 	  URL,{
// 		headers: {
// 		  'Accept': 'application/json'
// 		}
// 	  }
// 	);
// 	const data_clean: cleanData = response.data.map((item: titem) => {
// 		return {person: item.fname + ' ' + item.lname}
// 	  });
// 	  let res: string[] = [];
// 	  for (let i = 0; i < data_clean.length; i++)
// 		res.push(data_clean[i].person)
// 	setState(res);
//   });