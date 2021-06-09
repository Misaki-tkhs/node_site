import Img3 from "../img/hobby-img3";
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
    background-color: #333;
    flex-direction: column;
    align-items: flex-start;
`

const H2 = styled.h2`
    box-sizing: border-box; 
    font-size: 50px;
    font-weight: bold;
    white-space: nowrap;
    background-color: rgba(20, 20, 20, .8);
    margin-top: 10px;
    padding: 20px 30px;
    letter-spacing: .5em;
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

export const Fashion = () => {
  return(
    <Ul>
      <LI>
      <Img3 />
        <Contents>
            <H2>Fashion</H2>
              <P>ファッションが好きです。<br />
                 身につけるアイテムによって様々な自分を演出できます。<br />
                 自分だけでなく周りの人をコーディネートすることも楽しみのひとつです。</P>
        </Contents>
        <Introduction>
            <H3>Favorite Brand</H3>
            <P>HARE<br />
               EMMA CLOTHES<br />
               WEGO<br />
               tk.TAKEO KIKUCHI</P>
        </Introduction>
      </LI>
    </Ul>
  )
}