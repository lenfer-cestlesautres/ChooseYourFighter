import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/productListSlice'
import productsReducer from './Slices/productsSlice'
// import { productList } from './actions';
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



export const store = configureStore({
	reducer: {
		counter: counterReducer, //! тестовый но мб пригодится счётчик и пушер в массив индексов
	//   productList: productListReducer, //список из серчбара
	  	products: productsReducer, // шо добавили
	//   product: singleProductReducer, //шо поправить захотели
	},
});






