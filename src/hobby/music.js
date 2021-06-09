import Img2 from "../img/hobby-img2";
import styled from 'styled-components';

const Ul = styled.ul`
    box-sizing: border-box;
    color: azure;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
`
const LI = styled.li`
    position: relative;
    list-style: none;
`

const Contents = styled.div`
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 40px;
`

const Introduction = styled.div`
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const H2 = styled.h2`
    box-sizing: border-box;
    font-size: 50px;
    font-weight: bold;
    white-space: nowrap;
    background-color: rgba(20, 20, 20, .8);
    padding: 20px 30px;
    letter-spacing: 1em;
    border-radius: 5px;
    width: 100%;
`
const H3 = styled.h3`
    box-sizing: border-box; 
    font-size: 30px;
    font-weight: bold;
    white-space: nowrap;
    background-color: rgba(27, 172, 147, 0.8);
    margin-top: 10px;
    padding: 7px 15px;
    letter-spacing: 0.3em;
    border-radius: 5px;
`

const P = styled.p`
    line-height: 1.6;
    background-color: #555;
    font-size: 14px;
    max-width: 360px;
    padding: 7px;
    margin-top: 15px;
    margin-bottom: 70px;
    border-radius: 5px;
`


export const Music = () => {
  return(
    <Ul>
      <LI>
        <Img2 />
        <Contents>
            <H2>Music</H2>
            <P>音楽が好きです。<br />
              ロック、HIP-HOP、ネオシティポップ、アシッドジャズ　etc...1300以上もの音楽ジャンルがあります。<br />
              その時のシチュエーション、気分に合わせたジャンルの曲が、日常を彩り、心に寄り添ってくれます。</P>
        </Contents>
        <Introduction>
            <H3>Favorite Songs</H3>
            <P>mix juiceのいうとおり/UNISON SQUARE GARDEN<br />
               Killer Queen/Queen<br />
               助演男優賞/Creepy Nuts</P>
        </Introduction>
      </LI>
   </Ul>
  )
}