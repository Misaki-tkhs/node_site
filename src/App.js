import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {Introduction} from "./introduction";
import {Hobby} from "./Hobby";
import {Top} from "./top";


const Background = styled.div`
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #333;
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 64px 0;
`
const HeaderUl = styled.ul`
  font-size: 30px;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
  background-color: #555;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  color: #fff;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '3px solid orange' : 'none'};
`

const Hr = styled.hr`
  margin-bottom: 30px;
  border-top:1px solid #111;
  border-bottom:1.5px solid #777;
`




function App({data}) {
  const [tab, setTab] = useState('top');
  const [profs, setProfs] =useState(data);


  const addProf = (prof) => {
    setProfs([...profs,prof]);
    setTab('introduction');
  }



  return (
    <Background>
      <Top />
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'introduction'} onClick={() => setTab('introduction')}>Self-Introduction</HeaderLi>
        </HeaderUl>
        <HeaderUl>
          <HeaderLi focused={tab === 'hobby'} onClick={() => setTab('hobby')}>My Hobby</HeaderLi>
        </HeaderUl>
      </Header>
      <Hr />
      {
        tab === 'hobby' ? <Hobby onAddProf={addProf} /> : <Introduction profs={profs} /> 
      }
    </Background>
  );
}

export default App;