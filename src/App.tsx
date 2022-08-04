import React, {useEffect, useState} /*, { Component, useState, useEffect}*/ from 'react';
import {
  Grommet,
  Nav,
  Anchor,
  Footer
} from 'grommet';
import {
  Home,
  Notification,
  ChatOption,
  //Close,
 // Edit
} from 'grommet-icons';
import logo from "./icon_sber-01.png";
import './App.css';
import {
  AppBar,
  AppBarPre,
  CardFlip,
  SearchBar,
  Toast
} from './components/index';
import {
  theme
} from './constants/constants';
import {titem, cleanData} from './store/types'
// import { RootState, store } from './store'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment} from './store/productListSlice'



const URL: string = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true'


// const Counter = () => {
//   const count = useSelector((state: RootState) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }

const App = () => {
  const init: string[] = [];
  const [state, setState] = useState(init);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const json = await response.json();
      const data_clean: cleanData = json.map((item: titem) => {
        return {person: item.fname + ' ' + item.lname}
      });
      let res: string[] = [];
      for (let i = 0; i < data_clean.length; i++)
        res.push(data_clean[i].person)
      setState(res);
    }
    fetchData();
  }, []);
  

  return (
      <Grommet theme={theme}>
        <AppBarPre></AppBarPre>
        <AppBar>
          <div><img src={logo} alt="logo" width="30px"/>
          <b className="p4">POWERED BY ALINA</b></div>
          <Nav animation="pulse">
          <button className="btn-hover color-6" title="В этой кнопке заключён главный принцип экзистенциализма Альбера Камю по версии Алины">TAP</button>
          </Nav>
        </AppBar>

        <div>
        <div id="div1" className="ccc"><SearchBar options={state}></SearchBar></div>
        {/* <div id="div2" className="ccc"><Counter></Counter></div> */}
        </div>
			<div className="row"><CardFlip/></div>


      <Toast message='The Document Object Model, you dummy'/>


      <Footer pad="small" direction="row" background="brand" align="bottom"  fill="horizontal" hoverIndicator="true">
        <Anchor
            icon={<Home />}
            onClick={() => {
              let answerr: string | null = prompt("Что есть дом?");
              if (answerr == null || answerr === "") Toast({message: "Жаль."});
              else Toast({message: "Жаль."});
            <Toast message='The Document Object Model, you dummy'/>
          }}/>
        <Anchor icon={<Notification />} onClick={(e) => alert("Расслабьтесь: я ничего не делаю")}></Anchor>
        <Anchor icon={<ChatOption />} href="https://github.com/lenfer-cestlesautres" />
      </Footer>

      </Grommet>
  );
}

export default App;