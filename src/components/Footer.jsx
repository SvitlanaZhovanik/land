import React from 'react';
import styled from 'styled-components';
import IconGroup from './IconGroup';

const StyledFooter = styled.footer`
  padding: 20px;
  background-color: ${({ theme }) => theme.colorFooterBackground};
  color: ${({ theme }) => theme.colorSecondFont};
  line-height: 1.6;
  text-align: center;
  & p {
    margin-top: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1360px) {
    margin-top: 0;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <IconGroup color="colorGreenBackground" />
      <p>Copyright &#169; 2021 - FinanceLedger</p>
    </StyledFooter>
  );
}
