import React, {useEffect, useState} from 'react';
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
} from 'grommet-icons';
import logo from "./icon_sber-01.png";
import './App.css';
import {
  AppBar,
  AppBarPre,
  CardsFlip,
  SearchBar,
  Toast,
  Toast2
} from './components/index';
import {
  theme
} from './constants/constants';
import {titem, cleanData} from './store/types'
import {Initializer} from './components/FlipCard/CardsFlip'


const URL: string = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true'

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
          <div>
            <img src={logo} alt="logo" width="30px"/>
            <b className="p4">POWERED BY ALINA</b>
          </div>
          <Nav animation="pulse">
            <Toast2 message='pretty but useless toast'></Toast2>
          </Nav>
        </AppBar>
        <div id="div1" className="ccc"><SearchBar options={state}></SearchBar></div>
  		  <Initializer arr={state}/>
        <div className="row"><CardsFlip/></div>
        <Toast message='The Document Object Model, you dummy'/>
    
        <Footer pad="small" direction="row" background="brand" align="bottom"  fill="horizontal" hoverIndicator="true">
          <Anchor
              icon={<Home />}
              onClick={() => {alert("Я не только ненужный, но ещё и некрасивый")}}/>
          <Anchor icon={<Notification />} onClick={(e) => alert("Расслабьтесь: я ничего не делаю")}></Anchor>
          <Anchor icon={<ChatOption />} title="Сейчас будет ссылка на гит, осторожно" href="https://github.com/lenfer-cestlesautres" />
        </Footer>
      </Grommet>
  );
}

export default App;