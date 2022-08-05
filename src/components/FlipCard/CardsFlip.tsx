import React, { useEffect, useState } from "react";
import { RootState } from "../../store";
import { useDispatch, useSelector } from 'react-redux';
import {addProductsObjectArray} from '../../store/Slices/productsSlice';

import {CardFlip} from './CardFlip';
const { sentence } = require('txtgen/dist/cjs/txtgen.js');



//! нужно пофиксить постоянный ререндер теста



// interface IProductsInfo {
// 	name: string;
// 	age: number;
// 	phrase: string;
// 	skills?: string;
// };

export const Initializer = (props: {arr: string[]}) => {
	// const products = useSelector((state: RootState) => state.products.chosen_products);
	// const dispatch = useDispatch();
	// let ProductsInfo: IProductsInfo[] = new Array(10);
	// let i: number = 0;
	// console.log("fdfdf");
	// console.log(props.arr);
	
	// while (i < props.arr.length) {
	// 	ProductsInfo[i].name = props.arr[i];
	// 	ProductsInfo[i].age = Math.ceil(Math.random() * 100);
	// 	ProductsInfo[i].phrase = sentence();
	// 	console.log(ProductsInfo);
	// 	console.log(i);
	// 	console.log("aaaaaaaaaaaaaaa");

	// 	i++;
	// }
	// 	console.log(ProductsInfo);
	// 	dispatch(addProductsObjectArray(ProductsInfo));
		return <></>

};





export const CardsFlip = () => {
	const products = useSelector((state: RootState) => state.products.chosen_products);
	const dispatch = useDispatch();

	let init: string[] = [];
	let [crutch, setCrutch] = useState(init);
	useEffect(() => {
		function ll(products: string[]) {
		// console.log(ProductsInfo);
		// dispatch(addProductsObjectArray(ProductsInfo));
		setCrutch(['stop'])
	};
	ll(products);
	}, []);


	
	if (products.length === 0) return (<div/>)
	else
	return (
	<div className="row">
	{
		products.map(item => (
				<CardFlip item={item}></CardFlip>
			)
		)
	}
	</div>
	);
  };