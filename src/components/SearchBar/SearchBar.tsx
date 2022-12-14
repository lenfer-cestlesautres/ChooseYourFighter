import React from 'react';
import {Select} from 'grommet';
import {addProductIndex } from '../../store/Slices/productListSlice';
import { addProducts } from '../../store/Slices/productsSlice';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import '../../App.css'
import { RootState } from '../../store';

export const SearchBar = (props: {options: string[]}) => {
		const indexes: number[] = [];
		const products = useSelector((state: RootState) => state.products.chosen_products);
		const [value] = React.useState();
		const dispatch = useDispatch();

		return (
        	<div onClick={(e) => {
				//TODO this func could be MUCH MORE EASIER 
					let str: string;
					let index: number;
					if ((e.target as HTMLElement).innerText) { //вытаскиваем текст из хтмл описания места куда тыкнули и если там внутри есть имечко то движемся дальше
						str = (e.target as HTMLElement).innerText;
						index = props.options.indexOf(str); //ищем индекс имени
						if (index >= 0 && index < props.options.length && 
								(products.find((i) => i === str)) !== str) {
							indexes.push(index);
							dispatch(addProductIndex(props.options.indexOf(str))); //изменяем глобальный стейт, добавляя туда индексы тыкнутых чечиков
							dispatch(addProducts(str));
							// console.log(indexes, '\n', index, '\n', indexes.find((i) => i == index));
						}
					}
				}
				}
          	>
          	<Select
            	placeholder="Choose your fighter"
            	options={props.options}
            	value={value}
        	/>
        	</div>	
      );
};