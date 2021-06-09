import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
width: 65%;
display: block;
border-radius: 5px;
margin-top: 50px;
`

function Img3() {
  return <ImgStyle src={`${process.env.PUBLIC_URL}/img3.jpg`} alt="Logo" />;
}

export default Img3;