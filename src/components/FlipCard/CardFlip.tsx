import {
	Box,
	Card,
	CardBody,
	TextInput,
	Anchor,
	Form,
	Button
} from "grommet";
import React, { useEffect, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import { RootState } from "../../store";
import { useDispatch, useSelector } from 'react-redux';
import {removeProduct, addProductsObjectArray} from '../../store/Slices/productsSlice';
import {editSkills} from '../../store/Slices/singleProductSlice';
import {Edit, Close} from 'grommet-icons';
const { sentence } = require('txtgen/dist/cjs/txtgen.js');




export const CardFlip = (props: {item: string}) => {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const age = Math.ceil(Math.random() * 100);
	const phrase = sentence();
	const skills = useSelector((state: RootState) => state.product.skills);
	const dispatch = useDispatch();
	const [text, setText] = useState('');
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => {
      setIsShown(current => !current);
    };

	return (
	<span className="column" key = {props.item}>
	<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
		<Card className="card-hover color" onClick={() => {setIsFlipped((prev) => !prev); }}>
			<span onClick={(e) => {setIsFlipped((prev) => !prev); dispatch(removeProduct(props.item))}}>
				<Anchor icon={<Close />}/>
			</span>
			<CardBody>
				<h3>FIGHTER:</h3> <strong>{props.item}</strong>
				<p>AGE: {age}</p>
			</CardBody>
			<Box align='top'></Box>
		</Card>

		<Card className="card-hover color" onClick={() => setIsFlipped((prev) => !prev)}>
			<span onClick={(e) => {setIsFlipped((prev) => !prev); handleClick()}}>
				<Anchor icon={<Edit />}/> 								
			</span>
			<CardBody>
				FIGHTER INFO
				<p><i>{phrase}</i></p>
				
			</CardBody>
			<CardBody onClick={() => {setIsFlipped((prev) => !prev);  }}>
				FEEDBACK:
				{isShown && (
					<Form onSubmit={(e) => {e.preventDefault(); dispatch(editSkills(text)); handleClick(); setText('')}}>
						<TextInput type="text" value={text} onChange={(e) => {setText(e.currentTarget.value)}} />
						<Button primary type="submit" color="white" label="save" icon={<Edit />}/>
					</Form>
				)}
				{!isShown && (<p>"{skills}"</p>)}
			</CardBody>
			<Box>Здесь могла быть ваша реклама</Box>
		</Card> 

	</ReactCardFlip>
	</span>
	);
};