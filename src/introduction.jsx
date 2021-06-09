import styled from 'styled-components';
import Img from './img/prof-img'
import React from "react";

// import ReactDOM from "react-dom";
import {PROFILE} from "./profile";




const Title = styled.h4`
  letter-spacing: 2px;
  font-size: 40px;
  color: #fff;
  background-color: #333;
  max-width: 1000px;
  margin: 0 auto;
`
const SubTitle = styled.h3`
  letter-spacing: 2px;
  font-size: 30px;
  color: #fff;
  background-color: #333;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 100px;  
`

const TopItem = styled.div`
  padding: 8px 16px;
  color: #fff;
  background-color: #333;
`

const Prof = styled.p`
  font-size: 16px;
  line-height: 17px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 30px;
`
const About = styled.p`
  font-size: 16px;
  line-height: 17px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 30px;
`


export const Introduction = () => {
  return (
    <TopItem>
      <Title>❏Profile</Title>
      <Img />
      <Prof>
      {PROFILE.map((prof,index) => {return <TopItem key={index}>{prof}</TopItem>})}
      </Prof>
      <SubTitle>-about</SubTitle>
      <About>
        <p>専門学校では２Ｄグラフィックについて学んでいました。</p>
        <p>現在はエンジニアとして一人前になるために日々精進しています。</p>
        <p>学生時代はバスケットボール部、バドミントン部に所属しており、</p>
        <p>その経験から、仕事をしていく上では礼儀や協調性を特に大切にしています。</p>

        <p>また、とても多趣味なことから様々な人と共通の話題で盛り上がり、自然と打ち解けることができます。</p>
        <p>その趣味については、特に好きなものをMy Hobbyページで紹介しているので、良ければご覧ください。</p>
      </About>
    </TopItem>
  )
}
