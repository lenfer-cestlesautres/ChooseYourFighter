import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);













// import { /*createSlice, nanoid,*/ createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProductList = createAsyncThunk('productList/fetchProductList', async () => {
// 	const response = await axios.get(
// 	  'http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&pretty=true',{
// 		headers: {
// 		  'Accept': 'application/json'
// 		}
// 	  }
// 	);
//   console.log(response.config);
// 	return response.data.productList;
//   });
//   fetchProductList()
//   console.log("fetchProductList.toString()");
//   console.log(fetchProductList());