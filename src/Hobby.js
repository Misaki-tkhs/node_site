import {Movie} from "./hobby/movie";
import {Music} from "./hobby/music";
import {Fashion} from "./hobby/fashion";
import styled from 'styled-components';

const Background = styled.div`
box-sizing: border-box;
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #333;
  width: 100%;
`

export const Hobby = () => {
  return(
    <Background>
      <Movie />
      <Music />
      <Fashion />
    </Background>
  )
}