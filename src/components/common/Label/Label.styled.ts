import styled from 'styled-components';

export const LabelWrapper = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25px min-content auto;
  row-gap: 4px;
`;

export const ErrorMessage = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #921919;
`;

export const LabelText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #424242;
`;
