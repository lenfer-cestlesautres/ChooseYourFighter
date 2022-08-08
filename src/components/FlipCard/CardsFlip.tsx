import React, { useEffect } from "react";
import { RootState } from "../../store";
import {useDispatch, useSelector } from 'react-redux';
import {CardFlip} from './CardFlip';
import {addChosenObjects} from '../../store/Slices/productsSlice'
const { sentence } = require('txtgen/dist/cjs/txtgen.js');

interface IProductsInfo {
	name?: string;
	age?: number;
	phrase?: string;
	skills?: string;
};

export const CardsFlip = () => {
	const products = useSelector((state: RootState) => state.products.chosen_products);
	let chosen_objects: IProductsInfo[] = [];
	// const dispatch = useDispatch();

		console.log('len: ', products.length);
		let i: number = -1;

		while (++i < products.length) {
			let obj: IProductsInfo = {};
		
			obj.name = products[i];
			obj.age = Math.ceil(Math.random() * 100);
			obj.phrase = sentence();
			obj.skills = '';
			// dispatch(addChosenObjects(obj));
			chosen_objects.push(obj);
		}

	if (products.length === 0) return (<div/>)
	else
	return (
	<div className="row">
	{
		chosen_objects.map(item => (
				<CardFlip index={chosen_objects.indexOf(item)} item={item} key={item.name}></CardFlip>
			)
		)
	}
	</div>
	);
  };