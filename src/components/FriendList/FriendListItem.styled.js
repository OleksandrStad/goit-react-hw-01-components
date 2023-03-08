import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 5px;
  background: #f0efef;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 5px;
`;
export const FriendName = styled.p`
  margin-left: 25px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
   background-color: ${({ online }) => (online ? 'green' : 'red')};
  margin-right: 10px;
`;