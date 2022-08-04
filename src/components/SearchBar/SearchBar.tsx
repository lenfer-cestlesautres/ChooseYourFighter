import React from 'react';
import {Select} from 'grommet';
import {addProductIndex, addProductsList } from '../../store/Slices/productListSlice';
import { addProducts } from '../../store/Slices/productsSlice';
import {useDispatch} from 'react-redux';
// import { RootState } from '../../store';
// import { useSelector } from 'react-redux';
// import { CardFlip } from '../FlipCard/CardFlip';
import '../../App.css'


export const SearchBar = (props: {options: string[]}) => {
		const indexes: number[] = [];
		const [value] = React.useState();
		const dispatch = useDispatch();
		dispatch(addProductsList(props.options))
		return (
        	<div onClick={(e) => {
				//TODO вообще-то можно просто сразу имена передавать НО МНЕ ЖАЛЬ ЭТО ЗАТИРАТЬ
					let str: string;
					let index: number;
					if ((e.target as HTMLElement).innerText) { //вытаскиваем текст из хтмл описания места куда тыкнули и если там внутри есть имечко то движемся дальше
						str = (e.target as HTMLElement).innerText;
						index = props.options.indexOf(str); //ищем индекс имени
						if (index >= 0 && index < props.options.length && 
								(indexes.find((i) => i === index)) !== index) {
							indexes.push(index);
							dispatch(addProductIndex(props.options.indexOf(str))); //изменяем глобальный стейт, добавляя туда индексы тыкнутых чечиков
							dispatch(addProducts(str)); //
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


// export const AddCard = () => {

// }