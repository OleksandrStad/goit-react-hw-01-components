import styled from 'styled-components';

export const StatWrap = styled.div`
 width:300px;
 /* height:150px; */
  border-radius: 0px;
  background : #f0efef;
  box-shadow:32px 32px 64px #afaeae, -32px -32px 64 #ffffff;
  display:flex;
  margin:0 auto;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  /* padding-top:15px; */
  /* margin-top:15px; */
  `;
export const StatTitle = styled.h2`
  text-transform: uppercase;
  color: grey;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatList = styled.ul`
 margin-top: 15 px;
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
`;
export const StatItem = styled.li`
display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  border:1px solid rgb(217, 217, 217);
   width: 33%;
  height: 60px; 
`;

export const StatInfo = styled.span`
 margin-top : 5px;
  color: grey;
  text-align:center;
`;