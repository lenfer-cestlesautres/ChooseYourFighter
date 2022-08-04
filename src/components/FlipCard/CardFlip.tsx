import { Box, Card, CardBody } from "grommet";
import React from "react";
import ReactCardFlip from 'react-card-flip';
import { RootState } from "../../store";
// import { CounterState } from "../../store/productListSlice";
import { useSelector } from 'react-redux';


// export const CardFlip = (props: CounterState) => {
export const CardFlip = () => {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const products = useSelector((state: RootState) => state.products.chosen_products);
	if (products.length === 0) return (<div/>)
	else
	return (
	<div className="row">
	{
		products.map(item => (
				<div className="column" key = {item}>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					{/* <div onMouseEnter={() => setIsFlipped((prev) => !prev)}> */}
					<div onPointerEnter={() => true} onClick={() => setIsFlipped((prev) => !prev)}>
						<Card className="card-hover color-6">
							<CardBody>Fighter: {item}</CardBody>
							<Box align='top'></Box>
						</Card>
					</div>
					{/* <div onMouseLeave={() => setIsFlipped((prev) => !prev)}> */}
					<div onPointerEnter={() => true} onClick={() => setIsFlipped((prev) => !prev)}>
						<Card className="card-hover color-6">
							<CardBody>Fighter info</CardBody>
							<Box >Здесь могла быть ваша реклама</Box>
						</Card>     
					</div>
				</ReactCardFlip>
				</div>
			)
		)
	}
	 </div>
	);
	
  };