import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  display: block;
  border-radius: 5px;
  box-shadow: 10px 10px sandybrown;
`

function Img() {
  return <ImgStyle src={`${process.env.PUBLIC_URL}/img4.jpg`} alt="Logo" />;
}

export default Img;