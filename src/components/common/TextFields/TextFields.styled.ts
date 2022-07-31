import styled from 'styled-components';

export const InputFiled = styled.div`
  min-height: 32px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: inherit;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  &:hover {
    border-color: #3918d9;
  }
  &:focus {
    border: 3px solid #f8f5ff;
  }
  &:active {
    border: 1px solid #c2c2c2;
  }
  &:disabled {
    background: #f5f5f5;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    pointer-events: none;
    cursor: not-allowed;
  }
`;
