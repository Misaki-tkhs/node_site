import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  margin-left: auto;
  width: 65%;
  display: block;
  border-radius: 5px;
  margin-top: 50px;
`

function Img2() {
  return <ImgStyle src={`${process.env.PUBLIC_URL}/img2.jpg`} alt="Logo" />;
}

export default Img2;