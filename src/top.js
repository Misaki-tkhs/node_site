import styled from 'styled-components';

const Div = styled.div`
  box-sizing: border-box;
  font-family: 'Sylfaen';
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  margin-bottom: 0px;
  font-size: 40px;
  color: sandybrown;
`
const SubTitle = styled.h1`
  margin-top: 0px;
  color: azure;
  letter-spacing: 5px;
`

export const Top = () => {
  return(
    <Div>
      <Title >MiSAKi TAKAHASHi</Title>
      <SubTitle >Profile Site</SubTitle>
    </Div>
  )
}
