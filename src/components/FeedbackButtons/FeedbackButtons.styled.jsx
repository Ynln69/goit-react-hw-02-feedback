import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  color: #f8f8ff;
  fill: #ffff00;
  font-size: 20px;
  text-transform: capitalize;

  &:nth-of-type(1) {
    background-color: #228b22;
    &:hover {
      box-shadow: 0px 0px 20px 5px #228b22;
    }
  }
  &:nth-of-type(2) {
    background-color: #ff4500;
    &:hover {
      box-shadow: 0px 0px 20px 5px #ff4500;
    }
  }
  &:nth-of-type(3) {
    background-color: #b22222;
    &:hover {
      box-shadow: 0px 0px 20px 5px #b22222;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
`;
