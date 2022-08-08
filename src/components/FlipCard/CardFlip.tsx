import {
	Box,
	Card,
	CardBody,
	TextInput,
	Anchor,
	Form,
	Button
} from "grommet";
import React, {useState} from "react";
import ReactCardFlip from 'react-card-flip';
import { useDispatch } from 'react-redux';
import {removeProduct} from '../../store/Slices/productsSlice';
import {Edit, Close} from 'grommet-icons';

interface IProductsInfo {
	name?: string;
	age?: number;
	phrase?: string;
	skills?: string;
};

export const CardFlip = (props: {index: number, item: IProductsInfo}) => {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const [text, setText] = useState('');
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => {
      setIsShown(current => !current);
    };
	const [crutch, setCrutch] = useState('');
	const dispatch = useDispatch();

	return (
	<span className="column">
	<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
		<Card className="card-hover color" onClick={() => {setIsFlipped((prev) => !prev); }}>
			<span onClick={(e) => {setIsFlipped((prev) => !prev); dispatch(removeProduct(props.item.name))}}>
				<Anchor icon={<Close />}/>
			</span>
			<CardBody>
				<h3>FIGHTER:</h3> <strong>{props.item.name}</strong>
				<p>AGE: {props.item.age}</p>
			</CardBody>
			<Box align='top'></Box>
		</Card>

		<Card className="card-hover color" onClick={() => setIsFlipped((prev) => !prev)}>
			<span onClick={(e) => {setIsFlipped((prev) => !prev); handleClick()}}>
				<Anchor icon={<Edit />}/> 								
			</span>
			<CardBody>
				FIGHTER INFO
				<p><i>{props.item.phrase}</i></p>
				
			</CardBody>
			<CardBody onClick={() => {setIsFlipped((prev) => !prev);  }}>
				FEEDBACK:
				{isShown && (
					<Form onSubmit={(e) => {
												e.preventDefault();
												setCrutch(text);
												handleClick();
												setText('')
											}}>
						<TextInput type="text" value={text} onChange={(e) => {setText(e.currentTarget.value)}} />
						<Button primary type="submit" color="white" label="save" icon={<Edit />}/>
					</Form>
				)}
				{!isShown && (<p>"{crutch}"</p>)}
			</CardBody>
			<Box>Здесь могла быть ваша реклама</Box>
		</Card> 

	</ReactCardFlip>
	</span>
	);
};