import Img1 from "../img/hobby-img";
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
    right: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 40px;
`
const Introduction = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    padding: 7px 15px;
    letter-spacing: 0.3em;
    border-radius: 5px;
    width: 100%;
`

const P = styled.p`
    box-sizing: border-box;
    background-color: #555;
    font-size: 14px;
    max-width: 360px;
    padding: 7px;
    margin-top: 5px;
    margin-bottom: 70px;
    border-radius: 5px;
`

export const Movie = () => {
  return(
    <Ul>
      <LI>
          <Img1 />
          <Contents>
              <H2>Movie</H2>
              <P>映画鑑賞が好きです。<br />
              ジャンル、年代を問わず幅広い作品を視聴します。<br />
              様々な世界で巻き起こる、様々なストーリーを体験できるこのエンターテインメントは日常を豊かにし、私自身の感性を磨いてくれます。</P>
          </Contents>
          <Introduction>
              <H3>Favorite Movies</H3>
              <P>｢I am Sam｣ (2001)<br />
                 ｢きみに読む物語｣ (2004)<br />
                 ｢シックス・センス｣ (1999)<br />
                 ｢時計じかけのオレンジ｣ (1971)</P>
          </Introduction>
          
      </LI>
    </Ul>
  )
}