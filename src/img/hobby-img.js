import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 65%;
  display: block;
  border-radius: 5px;
  margin-top: 100px;
`

function Img1() {
  return <ImgStyle src={`${process.env.PUBLIC_URL}/img1.jpg`} alt="Logo" />;
}

export default Img1;